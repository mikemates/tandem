import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { joinActivity, leaveActivity } from '../../services/communityService';
import { currentUser } from '../../services/mockData';

/**
 * Component to display detailed information about a community activity
 */
const ActivityDetail = ({ activity }) => {
  const navigate = useNavigate();
  const [isJoining, setIsJoining] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [error, setError] = useState('');
  const [localActivity, setLocalActivity] = useState(activity);
  
  if (!activity) {
    return <div className="p-4 text-center text-gray-500">Activity not found</div>;
  }
  
  // Format date for display
  const formatDateTime = (dateString) => {
    const date = new Date(dateString);
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    };
    
    return date.toLocaleString(undefined, options);
  };
  
  // Calculate duration in hours
  const calculateDuration = () => {
    if (!activity.endDate) return '2 hours (estimated)';
    
    const start = new Date(activity.date);
    const end = new Date(activity.endDate);
    const diffHours = (end - start) / (1000 * 60 * 60);
    
    if (diffHours < 1) {
      const diffMinutes = Math.round(diffHours * 60);
      return `${diffMinutes} minutes`;
    }
    
    return `${Math.round(diffHours * 10) / 10} hours`;
  };
  
  // Check if user is already participating
  const isUserParticipating = () => {
    return localActivity.participants.some(p => p.userId === currentUser.id);
  };
  
  // Check if activity is full
  const isActivityFull = () => {
    return localActivity.maxParticipants && 
           localActivity.participants.length >= localActivity.maxParticipants;
  };
  
  // Check if activity has passed
  const hasActivityPassed = () => {
    const activityEndDate = localActivity.endDate 
      ? new Date(localActivity.endDate) 
      : new Date(new Date(localActivity.date).getTime() + (2 * 60 * 60 * 1000));
    
    return new Date() > activityEndDate;
  };
  
  // Handle joining the activity
  const handleJoin = async () => {
    if (isUserParticipating()) return;
    if (isActivityFull()) return;
    if (hasActivityPassed()) return;
    
    setIsJoining(true);
    setError('');
    
    try {
      const updatedActivity = joinActivity(localActivity.id);
      setLocalActivity(updatedActivity);
    } catch (err) {
      setError(err.message || 'Failed to join activity');
      console.error(err);
    } finally {
      setIsJoining(false);
    }
  };
  
  // Handle leaving the activity
  const handleLeave = async () => {
    if (!isUserParticipating()) return;
    if (hasActivityPassed()) return;
    
    setIsLeaving(true);
    setError('');
    
    try {
      const updatedActivity = leaveActivity(localActivity.id);
      setLocalActivity(updatedActivity);
    } catch (err) {
      setError(err.message || 'Failed to leave activity');
      console.error(err);
    } finally {
      setIsLeaving(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden scale-in">
      {/* Activity header */}
      <div className="relative">
        <div className="h-32 bg-gradient-to-r from-primary-600 to-primary-400"></div>
        <div className="px-6 pb-4">
          <div className="flex justify-between items-center -mt-16">
            <div className="bg-white p-3 rounded-xl shadow">
              <span className="text-xl font-bold text-primary-600">{localActivity.category}</span>
            </div>
            
            <Link to="/community" className="btn btn-secondary text-sm">
              Back to All
            </Link>
          </div>
        </div>
      </div>
      
      {/* Activity content */}
      <div className="px-6 py-4">
        {/* Error display */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        {/* Title and join/leave button */}
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-2xl font-bold text-gray-900">{localActivity.title}</h2>
          
          {!hasActivityPassed() && (
            isUserParticipating() ? (
              <button
                onClick={handleLeave}
                disabled={isLeaving}
                className="btn btn-secondary"
              >
                {isLeaving ? 'Leaving...' : 'Leave Activity'}
              </button>
            ) : (
              <button
                onClick={handleJoin}
                disabled={isJoining || isActivityFull()}
                className={`btn ${isActivityFull() ? 'btn-disabled' : 'btn-primary'}`}
              >
                {isJoining ? 'Joining...' : isActivityFull() ? 'Activity Full' : 'Join Activity'}
              </button>
            )
          )}
        </div>
        
        {/* Date, time, location */}
        <div className="mb-6">
          <div className="flex items-center mb-2">
            <span className="mr-2 text-primary-500">🗓️</span>
            <span className="text-gray-800">{formatDateTime(localActivity.date)}</span>
          </div>
          <div className="flex items-center mb-2">
            <span className="mr-2 text-primary-500">⏱️</span>
            <span className="text-gray-800">Duration: {calculateDuration()}</span>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-primary-500">📍</span>
            <span className="text-gray-800">{localActivity.location.displayName}</span>
          </div>
        </div>
        
        {/* Description */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">About This Activity</h3>
          <p className="text-gray-700">{localActivity.description}</p>
        </div>
        
        {/* Skills involved */}
        {localActivity.skillsInvolved && localActivity.skillsInvolved.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Skills Involved</h3>
            <div className="flex flex-wrap gap-2">
              {localActivity.skillsInvolved.map(skill => (
                <span key={skill} className="badge badge-primary">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Host information */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Hosted By</h3>
          <div className="flex items-center">
            <img 
              src={localActivity.hostPhotoUrl} 
              alt={localActivity.hostName} 
              className="w-12 h-12 rounded-full mr-3 object-cover"
            />
            <div>
              <p className="font-medium text-gray-900">{localActivity.hostName}</p>
              <Link to={`/profile/${localActivity.hostId}`} className="text-sm text-primary-600 hover:text-primary-800">
                View Profile
              </Link>
            </div>
          </div>
        </div>
        
        {/* Participants */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Participants ({localActivity.participants.length}
            {localActivity.maxParticipants ? ` of ${localActivity.maxParticipants}` : ''})
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {localActivity.participants.map(participant => (
              <Link 
                key={participant.userId} 
                to={`/profile/${participant.userId}`}
                className="flex flex-col items-center p-2 hover:bg-gray-50 rounded"
              >
                <img 
                  src={participant.profilePhotoUrl} 
                  alt={participant.name} 
                  className="w-12 h-12 rounded-full mb-2 object-cover"
                />
                <span className="text-sm font-medium text-gray-900 text-center">
                  {participant.name}
                </span>
              </Link>
            ))}
            
            {/* Show empty spots if there's a max */}
            {localActivity.maxParticipants && 
             localActivity.participants.length < localActivity.maxParticipants && 
             Array.from({ length: localActivity.maxParticipants - localActivity.participants.length }).map((_, index) => (
              <div key={`empty-${index}`} className="flex flex-col items-center p-2">
                <div className="w-12 h-12 rounded-full bg-gray-200 mb-2 flex items-center justify-center">
                  <span className="text-gray-400">+</span>
                </div>
                <span className="text-sm text-gray-400 text-center">Available</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityDetail;

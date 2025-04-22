import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Component to display a community activity card
 */
const ActivityCard = ({ activity }) => {
  // Format date for display
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    
    // Format date
    const dateOptions = { month: 'short', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(undefined, dateOptions);
    
    // Format time
    const timeOptions = { hour: 'numeric', minute: '2-digit' };
    const formattedTime = date.toLocaleTimeString(undefined, timeOptions);
    
    return `${formattedDate} at ${formattedTime}`;
  };
  
  // Calculate time remaining until activity
  const getTimeRemaining = (dateString) => {
    const activityDate = new Date(dateString);
    const now = new Date();
    const diffTime = activityDate - now;
    
    // If event has passed
    if (diffTime < 0) {
      return 'Event has passed';
    }
    
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays > 30) {
      const diffMonths = Math.floor(diffDays / 30);
      return `In ${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
    } else if (diffDays > 0) {
      return `In ${diffDays} day${diffDays > 1 ? 's' : ''}`;
    } else {
      const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
      if (diffHours > 0) {
        return `In ${diffHours} hour${diffHours > 1 ? 's' : ''}`;
      } else {
        const diffMinutes = Math.floor(diffTime / (1000 * 60));
        return `In ${diffMinutes} minute${diffMinutes > 1 ? 's' : ''}`;
      }
    }
  };
  
  // Get activity status (open, full, happening now)
  const getActivityStatus = () => {
    const now = new Date();
    const activityDate = new Date(activity.date);
    const endDate = activity.endDate ? new Date(activity.endDate) : new Date(activityDate.getTime() + (2 * 60 * 60 * 1000)); // Default to 2 hours
    
    // If activity is happening now
    if (now >= activityDate && now <= endDate) {
      return { 
        text: 'Happening now', 
        classes: 'bg-green-100 text-green-800' 
      };
    }
    
    // If activity is full
    if (activity.maxParticipants && activity.participants.length >= activity.maxParticipants) {
      return { 
        text: 'Full', 
        classes: 'bg-red-100 text-red-800' 
      };
    }
    
    // Default: open for registration
    return { 
      text: 'Open', 
      classes: 'bg-blue-100 text-blue-800' 
    };
  };
  
  const status = getActivityStatus();
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <Link to={`/community/${activity.id}`} className="block">
        <div className="p-4">
          {/* Activity category and status */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-primary-600">
              {activity.category}
            </span>
            <span className={`text-xs font-medium px-2 py-1 rounded-full ${status.classes}`}>
              {status.text}
            </span>
          </div>
          
          {/* Activity title */}
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {activity.title}
          </h3>
          
          {/* Location and date */}
          <div className="text-sm text-gray-600 mb-3">
            <div className="flex items-start">
              <span className="mr-1">📍</span>
              <span>{activity.location.displayName}</span>
            </div>
            <div className="flex items-start">
              <span className="mr-1">🗓️</span>
              <span>{formatDate(activity.date)}</span>
            </div>
          </div>
          
          {/* Time remaining */}
          <div className="text-xs text-primary-700 font-medium mb-3">
            {getTimeRemaining(activity.date)}
          </div>
          
          {/* Host information */}
          <div className="flex items-center">
            <img 
              src={activity.hostPhotoUrl} 
              alt={activity.hostName} 
              className="w-8 h-8 rounded-full mr-2 object-cover"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">
                Hosted by {activity.hostName}
              </p>
              <p className="text-xs text-gray-500">
                {activity.participants.length} participants
                {activity.maxParticipants ? ` (max ${activity.maxParticipants})` : ''}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ActivityCard;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCurrentUserProfile } from '../../services/profileService';
import { getPotentialMatches } from '../../services/matchingService';
import { getConversations } from '../../services/messagingService';
import { getActivities } from '../../services/communityService';

/**
 * Dashboard page component - central hub for user experience
 */
const DashboardPage = () => {
  const [profile, setProfile] = useState(null);
  const [matches, setMatches] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Calculate profile completion percentage
  const calculateProfileCompletion = (profile) => {
    if (!profile) return 0;
    
    let completed = 0;
    let total = 5; // Total number of profile sections
    
    if (profile.name) completed++;
    if (profile.bio && profile.bio.length > 10) completed++;
    if (profile.location && profile.location.displayName) completed++;
    if (profile.skills && profile.skills.length > 0) completed++;
    if (profile.interests && profile.interests.length > 0) completed++;
    
    return Math.round((completed / total) * 100);
  };
  
  // Load all data for dashboard
  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        // Load profile data
        const userProfile = getCurrentUserProfile();
        setProfile(userProfile);
        
        // Load matches (top 5 by match score)
        const userMatches = getPotentialMatches();
        setMatches(userMatches.slice(0, 5));
        
        // Load recent conversations
        const userConversations = getConversations();
        setConversations(userConversations.slice(0, 3));
        
        // Load upcoming activities
        const userActivities = getActivities();
        setActivities(userActivities.slice(0, 3));
      } catch (error) {
        console.error('Error loading dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadDashboardData();
  }, []);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">Loading your dashboard...</p>
      </div>
    );
  }
  
  const profileCompletion = calculateProfileCompletion(profile);
  
  // Filter for upcoming activities
  const upcomingActivities = activities.filter(activity => {
    return new Date(activity.date) > new Date();
  }).sort((a, b) => new Date(a.date) - new Date(b.date));
  
  return (
    <div className="space-y-6 sm:space-y-8">
      <h1 className="text-xl sm:text-2xl font-bold text-primary-600 px-1">Your Connection Hub</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Personal Snapshot */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-4 sm:px-6 py-3 sm:py-5 border-b border-gray-200 bg-gray-50">
            <h2 className="text-base sm:text-lg font-medium text-gray-900">Personal Snapshot</h2>
          </div>
          <div className="px-4 sm:px-6 py-4 sm:py-5">
            <div className="flex items-center mb-4">
              <div className="w-full mr-4">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">Profile Completion</span>
                  <span className="text-sm font-medium text-gray-700">{profileCompletion}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-primary-600 h-2.5 rounded-full" 
                    style={{ width: `${profileCompletion}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-2xl font-bold text-primary-600">{profile.skills?.length || 0}</p>
                <p className="text-xs text-gray-500">Skills Shared</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-2xl font-bold text-primary-600">{profile.interests?.length || 0}</p>
                <p className="text-xs text-gray-500">Interests</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-2xl font-bold text-primary-600">{matches.length}</p>
                <p className="text-xs text-gray-500">Match Connections</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <p className="text-2xl font-bold text-primary-600">{conversations.length}</p>
                <p className="text-xs text-gray-500">Active Conversations</p>
              </div>
            </div>
            
            {profileCompletion < 100 && (
              <div className="mt-4">
                <Link to="/profile/edit" className="btn btn-secondary w-full text-center text-sm">
                  Complete Your Profile
                </Link>
              </div>
            )}
          </div>
        </div>
        
        {/* Local Activity Pulse */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-4 sm:px-6 py-3 sm:py-5 border-b border-gray-200 bg-gray-50">
            <h2 className="text-base sm:text-lg font-medium text-gray-900">Local Activity Pulse</h2>
          </div>
          <div className="px-4 sm:px-6 py-4 sm:py-5">
            <h3 className="font-medium text-gray-900 mb-2">Today in Your Area</h3>
            <div className="space-y-3">
              {activities.length > 0 ? (
                activities.slice(0, 3).map(activity => (
                  <div key={activity.id} className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center">
                      <span className="text-primary-600 text-xs">{activity.category.substring(0, 3)}</span>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                      <p className="text-xs text-gray-500">{new Date(activity.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {activity.location.displayName}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No activities today. Why not create one?</p>
              )}
            </div>
            
            <div className="mt-4">
              <Link to="/community" className="btn btn-secondary w-full text-center text-sm">
                Explore Activities
              </Link>
            </div>
          </div>
        </div>
        
        {/* New Matches */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-4 sm:px-6 py-3 sm:py-5 border-b border-gray-200 bg-gray-50">
            <h2 className="text-base sm:text-lg font-medium text-gray-900">New Matches</h2>
          </div>
          <div className="px-4 sm:px-6 py-4 sm:py-5">
            {matches.length > 0 ? (
              <div className="space-y-4">
                {matches.slice(0, 3).map(match => (
                  <div key={match.id} className="flex items-center">
                    <img
                      src={match.profilePhotoUrl}
                      alt={match.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div className="ml-4 flex-grow">
                      <p className="text-sm font-medium text-gray-900 truncate">{match.name}</p>
                      <p className="text-xs text-gray-500 truncate">{match.skills[0]?.specific || 'No skills listed'}</p>
                    </div>
                    <span className="match-score bg-accent">{match.matchScore}%</span>
                  </div>
                ))}
                
                <Link to="/matches" className="btn btn-primary w-full text-center text-sm">
                  View All Matches
                </Link>
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-sm text-gray-500 mb-4">No matches found yet</p>
                <Link to="/profile/interests" className="btn btn-secondary text-center text-sm">
                  Update Interests
                </Link>
              </div>
            )}
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-4 sm:px-6 py-3 sm:py-5 border-b border-gray-200 bg-gray-50">
            <h2 className="text-base sm:text-lg font-medium text-gray-900">Quick Actions</h2>
          </div>
          <div className="px-4 sm:px-6 py-4 sm:py-5">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Link to="/matches" className="bg-primary-600 text-white rounded-lg p-4 text-center hover:bg-primary-700 transition">
                <span className="block text-base sm:text-lg font-medium">Find Match</span>
                <span className="text-xs sm:text-xs">Discover people</span>
              </Link>
              <Link to="/community" className="bg-primary-600 text-white rounded-lg p-4 text-center hover:bg-primary-700 transition">
                <span className="block text-base sm:text-lg font-medium">Join</span>
                <span className="text-xs sm:text-xs">Local activities</span>
              </Link>
              <Link to="/messages" className="bg-accent text-white rounded-lg p-4 text-center hover:bg-accent transition">
                <span className="block text-base sm:text-lg font-medium">Message</span>
                <span className="text-xs sm:text-xs">Start conversations</span>
              </Link>
              <Link to="/community/create" className="bg-accent text-white rounded-lg p-4 text-center hover:bg-accent transition">
                <span className="block text-base sm:text-lg font-medium">Create</span>
                <span className="text-xs sm:text-xs">Host an activity</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Conversations */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-4 sm:px-6 py-3 sm:py-5 border-b border-gray-200 bg-gray-50">
            <h2 className="text-base sm:text-lg font-medium text-gray-900">Recent Conversations</h2>
          </div>
          <div className="px-4 sm:px-6 py-4 sm:py-5">
            {conversations.length > 0 ? (
              <div className="space-y-4">
                {conversations.map(conversation => {
                  // Find the other participant (not the current user)
                  const otherParticipantId = conversation.participants.find(id => id !== profile.id);
                  const otherParticipant = matches.find(match => match.id === otherParticipantId);
                  
                  return (
                    <div key={conversation.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center mb-2">
                        <img
                          src={otherParticipant?.profilePhotoUrl || 'https://via.placeholder.com/40'}
                          alt={otherParticipant?.name || 'User'}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                        <div className="ml-3 flex-grow">
                          <p className="text-sm font-medium text-gray-900 truncate max-w-[120px] sm:max-w-none">{otherParticipant?.name || 'Unknown User'}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(conversation.lastMessageTimestamp).toLocaleDateString()}
                          </p>
                        </div>
                        {conversation.unreadCount > 0 && (
                          <span className="bg-primary-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            {conversation.unreadCount}
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 truncate max-w-full">{conversation.lastMessage}</p>
                    </div>
                  );
                })}
                
                <Link to="/messages" className="btn btn-secondary w-full text-center text-sm">
                  View All Messages
                </Link>
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-sm text-gray-500 mb-4">No conversations yet</p>
                <Link to="/matches" className="btn btn-secondary text-center text-sm">
                  Find People to Message
                </Link>
              </div>
            )}
          </div>
        </div>
        
        {/* Upcoming Events */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-4 sm:px-6 py-3 sm:py-5 border-b border-gray-200 bg-gray-50">
            <h2 className="text-base sm:text-lg font-medium text-gray-900">Upcoming Events</h2>
          </div>
          <div className="px-4 sm:px-6 py-4 sm:py-5">
            {upcomingActivities.length > 0 ? (
              <div className="space-y-4">
                {upcomingActivities.slice(0, 3).map(activity => (
                  <div key={activity.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                    <div className="flex">
                      <div className="flex-shrink-0 rounded-lg bg-primary-100 text-primary-800 p-2 text-center w-12 sm:w-14">
                        <span className="block text-sm">{new Date(activity.date).toLocaleDateString([], { month: 'short' })}</span>
                        <span className="block text-lg font-bold">{new Date(activity.date).getDate()}</span>
                      </div>
                      <div className="ml-4">
                        <p className="text-sm font-medium text-gray-900 truncate">{activity.title}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(activity.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} • {activity.location.displayName}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {activity.participants.length} participant{activity.participants.length !== 1 ? 's' : ''}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                <Link to="/community" className="btn btn-secondary w-full text-center text-sm">
                  View All Events
                </Link>
              </div>
            ) : (
              <div className="text-center py-4">
                <p className="text-sm text-gray-500 mb-4">No upcoming events</p>
                <Link to="/community" className="btn btn-secondary text-center text-sm">
                  Discover Events
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

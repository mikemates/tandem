// Community service for Tandem
// Handles community activities and events

import { mockActivities } from './mockData';
import { currentUser } from './mockData';

/**
 * Get all community activities
 * @param {Object} filters - Optional filters to apply
 * @returns {Array} - List of activities matching filters
 */
export function getActivities(filters = {}) {
  let activities = [...mockActivities];
  
  // Apply category filter
  if (filters.category) {
    activities = activities.filter(activity => 
      activity.category.toLowerCase() === filters.category.toLowerCase()
    );
  }
  
  // Apply location filter (distance in miles)
  if (filters.maxDistance && currentUser.location) {
    activities = activities.filter(activity => {
      if (!activity.location || !activity.location.lat || !activity.location.lng) {
        return false;
      }
      
      const distance = calculateDistance(
        currentUser.location.lat,
        currentUser.location.lng,
        activity.location.lat,
        activity.location.lng
      );
      
      return distance <= filters.maxDistance;
    });
  }
  
  // Apply date filter
  if (filters.dateFrom) {
    const fromDate = new Date(filters.dateFrom);
    activities = activities.filter(activity => 
      new Date(activity.date) >= fromDate
    );
  }
  
  // Filter by host
  if (filters.hostId) {
    activities = activities.filter(activity => 
      activity.hostId === filters.hostId
    );
  }
  
  // Sort activities by date (newest first)
  activities.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  return activities;
}

/**
 * Get a single activity by ID
 * @param {string} activityId - The activity ID
 * @returns {Object|null} - The activity or null if not found
 */
export function getActivityById(activityId) {
  return mockActivities.find(activity => activity.id === activityId) || null;
}

/**
 * Get activities hosted by a specific user
 * @param {string} userId - The user ID
 * @returns {Array} - List of activities hosted by the user
 */
export function getActivitiesByHost(userId) {
  return mockActivities.filter(activity => activity.hostId === userId);
}

/**
 * Get activities the current user is participating in
 * @returns {Array} - List of activities the user is participating in
 */
export function getUserParticipatingActivities() {
  return mockActivities.filter(activity => 
    activity.participants.some(p => p.userId === currentUser.id)
  );
}

/**
 * Join an activity as the current user
 * @param {string} activityId - The activity ID
 * @returns {Object} - The updated activity
 */
export function joinActivity(activityId) {
  const activity = getActivityById(activityId);
  
  if (!activity) {
    throw new Error(`Activity with ID ${activityId} not found`);
  }
  
  // Check if user is already participating
  if (activity.participants.some(p => p.userId === currentUser.id)) {
    throw new Error('You are already participating in this activity');
  }
  
  // Check if activity is full
  if (activity.maxParticipants && 
      activity.participants.length >= activity.maxParticipants) {
    throw new Error('This activity is already full');
  }
  
  // Add user to participants
  activity.participants.push({
    userId: currentUser.id,
    name: currentUser.name,
    profilePhotoUrl: currentUser.profilePhotoUrl,
    joinedDate: new Date().toISOString()
  });
  
  return activity;
}

/**
 * Leave an activity
 * @param {string} activityId - The activity ID
 * @returns {Object} - The updated activity
 */
export function leaveActivity(activityId) {
  const activity = getActivityById(activityId);
  
  if (!activity) {
    throw new Error(`Activity with ID ${activityId} not found`);
  }
  
  // Check if user is participating
  if (!activity.participants.some(p => p.userId === currentUser.id)) {
    throw new Error('You are not participating in this activity');
  }
  
  // Remove user from participants
  activity.participants = activity.participants.filter(
    p => p.userId !== currentUser.id
  );
  
  return activity;
}

/**
 * Create a new activity (hosted by current user)
 * @param {Object} activityData - The activity data
 * @returns {Object} - The created activity
 */
export function createActivity(activityData) {
  // Validate required fields
  if (!activityData.title || !activityData.description || !activityData.date || 
      !activityData.category || !activityData.location) {
    throw new Error('Missing required fields');
  }
  
  // Create new activity
  const newActivity = {
    id: 'act_' + Math.random().toString(36).substr(2, 9),
    title: activityData.title,
    description: activityData.description,
    date: activityData.date,
    category: activityData.category,
    location: activityData.location,
    hostId: currentUser.id,
    hostName: currentUser.name,
    hostPhotoUrl: currentUser.profilePhotoUrl,
    createdAt: new Date().toISOString(),
    maxParticipants: activityData.maxParticipants || null,
    skillsInvolved: activityData.skillsInvolved || [],
    participants: [{
      userId: currentUser.id,
      name: currentUser.name,
      profilePhotoUrl: currentUser.profilePhotoUrl,
      joinedDate: new Date().toISOString()
    }]
  };
  
  // Add to mock activities
  mockActivities.unshift(newActivity);
  
  return newActivity;
}

/**
 * Calculate distance between two points using Haversine formula
 * @param {number} lat1 - Latitude of point 1
 * @param {number} lon1 - Longitude of point 1
 * @param {number} lat2 - Latitude of point 2
 * @param {number} lon2 - Longitude of point 2
 * @returns {number} - Distance in miles
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 3958.8; // Earth's radius in miles
  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);
  
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * 
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Convert degrees to radians
 * @param {number} degrees - Angle in degrees
 * @returns {number} - Angle in radians
 */
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

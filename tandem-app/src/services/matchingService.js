// Matching service for Tandem
// Implements the matching algorithm and related functionality

import { mockUsers, currentUser } from './mockData';

/**
 * Calculate match score between the current user and another user
 * @param {Object} otherUser - The user to compare with the current user
 * @returns {number} - Match score (0-100)
 */
export function calculateMatchScore(otherUser) {
  let score = 0;
  const MAX_SCORE = 100;
  
  // Check if skills match what the other is seeking
  currentUser.skills.forEach(skill => {
    otherUser.seeking.forEach(seekingItem => {
      if (skill.specific.toLowerCase() === seekingItem.skill.toLowerCase()) {
        score += 20; // Major score boost for direct skill match
      }
    });
  });
  
  // Check if seeking matches what the other offers
  currentUser.seeking.forEach(seekingItem => {
    otherUser.skills.forEach(skill => {
      if (seekingItem.skill.toLowerCase() === skill.specific.toLowerCase()) {
        score += 20; // Major score boost for direct skill match
      }
    });
  });
  
  // Check for shared interests
  const userInterests = new Set(currentUser.interests.map(i => i.toLowerCase()));
  otherUser.interests.forEach(interest => {
    if (userInterests.has(interest.toLowerCase())) {
      score += 5; // Minor boost per shared interest
    }
  });
  
  // Proximity bonus (closer = better)
  const distance = calculateDistance(
    currentUser.location.lat, 
    currentUser.location.lng,
    otherUser.location.lat,
    otherUser.location.lng
  );
  
  // Within 1 mile = full points, decreasing after that
  const proximityScore = Math.max(0, 15 - (distance - 1) * 3);
  score += proximityScore;
  
  // Cap at MAX_SCORE
  return Math.min(Math.round(score), MAX_SCORE);
}

/**
 * Calculate distance between two coordinates in miles
 * @param {number} lat1 - Latitude of first point
 * @param {number} lon1 - Longitude of first point
 * @param {number} lat2 - Latitude of second point
 * @param {number} lon2 - Longitude of second point
 * @returns {number} - Distance in miles
 */
function calculateDistance(lat1, lon1, lat2, lon2) {
  // Simple distance calculation for POC
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
    Math.sin(dLon/2) * Math.sin(dLon/2); 
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
  const distance = R * c; // Distance in km
  return distance * 0.621371; // Convert to miles
}

/**
 * Convert degrees to radians
 * @param {number} deg - Degrees
 * @returns {number} - Radians
 */
function deg2rad(deg) {
  return deg * (Math.PI/180);
}

/**
 * Get match details explaining why users were matched
 * @param {Object} otherUser - The matched user
 * @returns {Object} - Match details
 */
export function getMatchDetails(otherUser) {
  const details = {
    skillsYouOffer: [],
    skillsTheyOffer: [],
    sharedInterests: []
  };
  
  // Skills you offer that they're seeking
  currentUser.skills.forEach(skill => {
    otherUser.seeking.forEach(seekingItem => {
      if (skill.specific.toLowerCase() === seekingItem.skill.toLowerCase()) {
        details.skillsYouOffer.push({
          skill: skill.specific,
          category: skill.category,
          yourLevel: skill.proficiency,
          theirInterest: seekingItem.experienceLevel
        });
      }
    });
  });
  
  // Skills they offer that you're seeking
  currentUser.seeking.forEach(seekingItem => {
    otherUser.skills.forEach(skill => {
      if (seekingItem.skill.toLowerCase() === skill.specific.toLowerCase()) {
        details.skillsTheyOffer.push({
          skill: skill.specific,
          category: skill.category,
          theirLevel: skill.proficiency,
          yourInterest: seekingItem.experienceLevel
        });
      }
    });
  });
  
  // Shared interests
  const userInterests = new Set(currentUser.interests.map(i => i.toLowerCase()));
  otherUser.interests.forEach(interest => {
    if (userInterests.has(interest.toLowerCase())) {
      details.sharedInterests.push(interest);
    }
  });
  
  return details;
}

/**
 * Get all potential matches with scores
 * @param {Object} filters - Optional filters
 * @returns {Array} - Array of potential matches
 */
export function getPotentialMatches(filters = {}) {
  // Filter out the current user from potential matches
  let matches = mockUsers.filter(user => user.id !== currentUser.id);
  
  // Apply filters
  if (filters.skillsOnly) {
    matches = matches.filter(user => {
      // Check if they are seeking any skills you offer
      const youOfferWhatTheySeek = user.seeking.some(seekingItem => 
        currentUser.skills.some(skill => 
          skill.specific.toLowerCase() === seekingItem.skill.toLowerCase()
        )
      );
      
      return youOfferWhatTheySeek;
    });
  }
  
  if (filters.interestsOnly) {
    matches = matches.filter(user => {
      // Check if you share any interests
      const userInterests = new Set(currentUser.interests.map(i => i.toLowerCase()));
      return user.interests.some(interest => 
        userInterests.has(interest.toLowerCase())
      );
    });
  }
  
  if (filters.maxDistance) {
    matches = matches.filter(user => {
      const distance = calculateDistance(
        currentUser.location.lat, 
        currentUser.location.lng,
        user.location.lat,
        user.location.lng
      );
      return distance <= filters.maxDistance;
    });
  }
  
  // Calculate match scores for each potential match
  matches = matches.map(user => ({
    ...user,
    matchScore: calculateMatchScore(user),
    matchDetails: getMatchDetails(user)
  }));
  
  // Sort by match score (highest first)
  return matches.sort((a, b) => b.matchScore - a.matchScore);
}

/**
 * Find a single match by ID
 * @param {string} userId - The user ID to find
 * @returns {Object|null} - The match or null if not found
 */
export function getMatchById(userId) {
  const user = mockUsers.find(user => user.id === userId);
  
  if (!user) {
    return null;
  }
  
  return {
    ...user,
    matchScore: calculateMatchScore(user),
    matchDetails: getMatchDetails(user)
  };
}

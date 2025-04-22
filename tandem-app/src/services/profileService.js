// Profile service for Tandem
// Handles profile data and operations

import { currentUser, mockUsers } from './mockData';

/**
 * Get the current user's profile
 * @returns {Object} - Current user profile
 */
export function getCurrentUserProfile() {
  return { ...currentUser };
}

/**
 * Get a user profile by ID
 * @param {string} userId - The user ID
 * @returns {Object|null} - The user profile or null if not found
 */
export function getUserProfileById(userId) {
  if (userId === currentUser.id) {
    return { ...currentUser };
  }
  
  const user = mockUsers.find(user => user.id === userId);
  return user ? { ...user } : null;
}

/**
 * Update the current user's profile
 * @param {Object} updateData - Data to update
 * @returns {Object} - Updated user profile
 */
export function updateUserProfile(updateData) {
  // In a real app, this would make an API call
  
  // Update the current user object with the new data
  Object.assign(currentUser, updateData);
  
  return { ...currentUser };
}

/**
 * Add a skill to the current user's profile
 * @param {Object} skill - The skill to add
 * @returns {Object} - Updated user profile
 */
export function addUserSkill(skill) {
  // Validate skill object
  if (!skill.category || !skill.specific || !skill.proficiency) {
    throw new Error('Invalid skill object. Required fields: category, specific, proficiency');
  }
  
  // Add default values if not provided
  const newSkill = {
    availability: 'Flexible',
    description: '',
    ...skill
  };
  
  // Add the skill
  currentUser.skills.push(newSkill);
  
  return { ...currentUser };
}

/**
 * Remove a skill from the current user's profile
 * @param {string} skillSpecific - The specific skill name to remove
 * @returns {Object} - Updated user profile
 */
export function removeUserSkill(skillSpecific) {
  const initialLength = currentUser.skills.length;
  
  // Filter out the skill to remove
  currentUser.skills = currentUser.skills.filter(
    skill => skill.specific.toLowerCase() !== skillSpecific.toLowerCase()
  );
  
  // Check if a skill was actually removed
  if (currentUser.skills.length === initialLength) {
    throw new Error(`Skill "${skillSpecific}" not found`);
  }
  
  return { ...currentUser };
}

/**
 * Add an interest to the current user's profile
 * @param {string} interest - The interest to add
 * @returns {Object} - Updated user profile
 */
export function addUserInterest(interest) {
  // Check if the interest already exists
  if (currentUser.interests.some(i => i.toLowerCase() === interest.toLowerCase())) {
    throw new Error(`Interest "${interest}" already exists`);
  }
  
  // Add the interest
  currentUser.interests.push(interest);
  
  return { ...currentUser };
}

/**
 * Remove an interest from the current user's profile
 * @param {string} interest - The interest to remove
 * @returns {Object} - Updated user profile
 */
export function removeUserInterest(interest) {
  const initialLength = currentUser.interests.length;
  
  // Filter out the interest to remove
  currentUser.interests = currentUser.interests.filter(
    i => i.toLowerCase() !== interest.toLowerCase()
  );
  
  // Check if an interest was actually removed
  if (currentUser.interests.length === initialLength) {
    throw new Error(`Interest "${interest}" not found`);
  }
  
  return { ...currentUser };
}

/**
 * Add a seeking item to the current user's profile
 * @param {Object} seekingItem - The seeking item to add
 * @returns {Object} - Updated user profile
 */
export function addUserSeeking(seekingItem) {
  // Validate seeking item object
  if (!seekingItem.skill || !seekingItem.experienceLevel) {
    throw new Error('Invalid seeking item. Required fields: skill, experienceLevel');
  }
  
  // Check if the seeking item already exists
  if (currentUser.seeking.some(
    item => item.skill.toLowerCase() === seekingItem.skill.toLowerCase()
  )) {
    throw new Error(`Seeking item for "${seekingItem.skill}" already exists`);
  }
  
  // Add the seeking item
  currentUser.seeking.push(seekingItem);
  
  return { ...currentUser };
}

/**
 * Remove a seeking item from the current user's profile
 * @param {string} skillName - The skill name to remove from seeking
 * @returns {Object} - Updated user profile
 */
export function removeUserSeeking(skillName) {
  const initialLength = currentUser.seeking.length;
  
  // Filter out the seeking item to remove
  currentUser.seeking = currentUser.seeking.filter(
    item => item.skill.toLowerCase() !== skillName.toLowerCase()
  );
  
  // Check if a seeking item was actually removed
  if (currentUser.seeking.length === initialLength) {
    throw new Error(`Seeking item for "${skillName}" not found`);
  }
  
  return { ...currentUser };
}

/**
 * Update the user's location
 * @param {Object} location - The location object
 * @returns {Object} - Updated user profile
 */
export function updateUserLocation(location) {
  // Validate location object
  if (!location.lat || !location.lng || !location.displayName) {
    throw new Error('Invalid location object. Required fields: lat, lng, displayName');
  }
  
  // Update the location
  currentUser.location = { ...location };
  
  return { ...currentUser };
}

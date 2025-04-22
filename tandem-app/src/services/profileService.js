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
 * Get user skills
 * @param {string} userId - The user ID
 * @returns {Array} - List of user skills
 */
export function getUserSkills(userId) {
  // For demo purposes, if this is the current user, return their skills
  // Otherwise, find the user in the mock data
  if (userId === currentUser.id) {
    return [...currentUser.skills];
  }
  
  const user = mockUsers.find(user => user.id === userId);
  return user ? [...user.skills] : [];
}

/**
 * Add a skill to a user's profile
 * @param {string} userId - The user ID
 * @param {Object} skill - The skill to add
 * @returns {Object} - Added skill with generated ID
 */
export function addUserSkill(userId, skill) {
  // Only allow adding skills to current user for demo
  if (userId !== currentUser.id) {
    throw new Error('Cannot add skills to other users');
  }
  
  // Validate skill object
  if (!skill.category || !skill.specific || !skill.proficiency) {
    throw new Error('Invalid skill object. Required fields: category, specific, proficiency');
  }
  
  // Generate a unique ID for the skill
  const skillId = `skill-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  // Add default values if not provided
  const newSkill = {
    id: skillId,
    availability: 'Flexible',
    description: '',
    ...skill
  };
  
  // Add the skill
  currentUser.skills.push(newSkill);
  
  return newSkill;
}

/**
 * Update a user's skill
 * @param {string} userId - The user ID
 * @param {Object} updatedSkill - The updated skill object
 * @returns {Object} - Updated skill
 */
export function updateUserSkill(userId, updatedSkill) {
  // Only allow updating skills of current user for demo
  if (userId !== currentUser.id) {
    throw new Error('Cannot update skills of other users');
  }
  
  // Validate skill object
  if (!updatedSkill.category || !updatedSkill.specific || !updatedSkill.proficiency) {
    throw new Error('Invalid skill object. Required fields: category, specific, proficiency');
  }
  
  // Find the skill index
  const skillIndex = currentUser.skills.findIndex(
    skill => skill.id === updatedSkill.id
  );
  
  if (skillIndex === -1) {
    throw new Error(`Skill with ID "${updatedSkill.id}" not found`);
  }
  
  // Update the skill
  currentUser.skills[skillIndex] = {
    ...currentUser.skills[skillIndex],
    ...updatedSkill
  };
  
  return currentUser.skills[skillIndex];
}

/**
 * Remove a skill from a user's profile
 * @param {string} userId - The user ID
 * @param {string} skillId - The ID of the skill to remove
 * @returns {Object} - Updated user profile
 */
export function removeUserSkill(userId, skillToRemove) {
  // Only allow removing skills from current user for demo
  if (userId !== currentUser.id) {
    throw new Error('Cannot remove skills from other users');
  }
  
  const initialLength = currentUser.skills.length;
  
  // Filter out the skill to remove
  currentUser.skills = currentUser.skills.filter(
    skill => skill.id !== skillToRemove.id
  );
  
  // Check if a skill was actually removed
  if (currentUser.skills.length === initialLength) {
    throw new Error(`Skill with ID "${skillToRemove.id}" not found`);
  }
  
  return { ...currentUser };
}

/**
 * Get user interests
 * @param {string} userId - The user ID
 * @returns {Array} - List of user interests
 */
export function getUserInterests(userId) {
  // For demo purposes, if this is the current user, return their interests
  // Otherwise, find the user in the mock data
  if (userId === currentUser.id) {
    return [...currentUser.interests];
  }
  
  const user = mockUsers.find(user => user.id === userId);
  return user ? [...user.interests] : [];
}

/**
 * Add an interest to a user's profile
 * @param {string} userId - The user ID
 * @param {Object} interest - The interest to add (with name and category)
 * @returns {Object} - Added interest with generated ID
 */
export function addUserInterest(userId, interest) {
  // Only allow adding interests to current user for demo
  if (userId !== currentUser.id) {
    throw new Error('Cannot add interests to other users');
  }
  
  // Validate interest object
  if (!interest.name || !interest.category) {
    throw new Error('Invalid interest object. Required fields: name, category');
  }
  
  // Check if the interest already exists
  if (currentUser.interests.some(i => i.name.toLowerCase() === interest.name.toLowerCase())) {
    throw new Error(`Interest "${interest.name}" already exists`);
  }
  
  // Generate a unique ID for the interest
  const interestId = `interest-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  
  // Create the interest object
  const newInterest = {
    id: interestId,
    ...interest
  };
  
  // Add the interest
  currentUser.interests.push(newInterest);
  
  return newInterest;
}

/**
 * Remove an interest from a user's profile
 * @param {string} userId - The user ID
 * @param {string} interestId - The ID of the interest to remove
 * @returns {Object} - Updated user profile
 */
export function removeUserInterest(userId, interestId) {
  // Only allow removing interests from current user for demo
  if (userId !== currentUser.id) {
    throw new Error('Cannot remove interests from other users');
  }
  
  const initialLength = currentUser.interests.length;
  
  // Filter out the interest to remove
  currentUser.interests = currentUser.interests.filter(
    interest => interest.id !== interestId
  );
  
  // Check if an interest was actually removed
  if (currentUser.interests.length === initialLength) {
    throw new Error(`Interest with ID "${interestId}" not found`);
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

import React, { useState, useEffect } from 'react';
import { getUserInterests, addUserInterest, removeUserInterest } from '../../services/profileService';
import { skillCategories, interestTags } from '../../services/mockData';

/**
 * Component for managing user interests
 */
const InterestManager = ({ userId }) => {
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Selected category for filtering
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Selected interests for adding
  const [selectedInterests, setSelectedInterests] = useState([]);
  
  // Load user interests on component mount
  useEffect(() => {
    const loadInterests = async () => {
      setLoading(true);
      try {
        const userInterests = getUserInterests(userId);
        setInterests(userInterests);
      } catch (err) {
        setError('Failed to load interests');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    
    loadInterests();
  }, [userId]);
  
  // Get all available interests
  const getAllInterests = () => {
    return interestTags.map(interest => ({
      id: `interest-${interest.toLowerCase().replace(/\s+/g, '-')}`,
      name: interest,
      category: getCategoryForInterest(interest)
    }));
  };
  
  // Helper to determine a category for an interest
  const getCategoryForInterest = (interest) => {
    // Find category that might contain this interest
    for (const category of skillCategories) {
      if (category.skills.some(skill => 
        skill.toLowerCase().includes(interest.toLowerCase()) || 
        interest.toLowerCase().includes(skill.toLowerCase())
      )) {
        return category.name;
      }
    }
    return "Other"; // Default category
  };
  
  // Get filtered interests based on selected category
  const getFilteredInterests = () => {
    const allInterests = getAllInterests();
    
    if (selectedCategory === 'all') {
      return allInterests;
    }
    
    return allInterests.filter(interest => {
      const category = skillCategories.find(cat => cat.name === interest.category);
      return category && category.id === selectedCategory;
    });
  };
  
  // Check if interest is already added by user
  const isInterestAdded = (interestId) => {
    return interests.some(interest => interest.id === interestId);
  };
  
  // Handle toggling interest selection
  const handleInterestToggle = (interest) => {
    if (isInterestAdded(interest.id)) {
      // If already added, remove it
      handleRemoveInterest(interest.id);
    } else {
      // If not added, add it
      handleAddInterest(interest);
    }
  };
  
  // Handle adding an interest
  const handleAddInterest = async (interest) => {
    setError('');
    setSuccess('');
    
    try {
      // Add the interest
      const addedInterest = addUserInterest(userId, interest);
      
      // Update UI
      setInterests([...interests, addedInterest]);
      setSuccess(`Added "${interest.name}" to your interests`);
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccess('');
      }, 3000);
      
    } catch (err) {
      setError(err.message || 'Failed to add interest');
      console.error(err);
    }
  };
  
  // Handle removing an interest
  const handleRemoveInterest = async (interestId) => {
    setError('');
    setSuccess('');
    
    try {
      // Find the interest to remove
      const interestToRemove = interests.find(i => i.id === interestId);
      
      if (!interestToRemove) {
        throw new Error('Interest not found');
      }
      
      // Remove the interest
      removeUserInterest(userId, interestId);
      
      // Update UI
      const updatedInterests = interests.filter(i => i.id !== interestId);
      setInterests(updatedInterests);
      setSuccess(`Removed "${interestToRemove.name}" from your interests`);
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccess('');
      }, 3000);
      
    } catch (err) {
      setError(err.message || 'Failed to remove interest');
      console.error(err);
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-900">Manage Interests</h2>
      </div>
      
      {/* Error and success messages */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg fade-in">
          {error}
        </div>
      )}
      
      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg fade-in">
          {success}
        </div>
      )}
      
      {/* Category filters */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Filter by Category</h3>
        
        <div className="flex flex-wrap gap-2">
          <button
            key="all"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === 'all'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            All Categories
          </button>
          
          {skillCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {/* Current interests */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Interests</h3>
        
        {loading ? (
          <div className="text-center py-6">
            <p className="text-gray-500">Loading interests...</p>
          </div>
        ) : interests.length === 0 ? (
          <div className="text-center py-6 bg-gray-50 rounded-lg">
            <p className="text-gray-500 mb-2">No interests added yet.</p>
            <p className="text-gray-700">Select interests below to add them to your profile.</p>
          </div>
        ) : (
          <div className="flex flex-wrap gap-2">
            {interests.map(interest => (
              <div 
                key={interest.id} 
                className="bg-primary-100 text-primary-800 px-3 py-1.5 rounded-full text-sm font-medium flex items-center slide-in-right"
              >
                {interest.name}
                <button
                  onClick={() => handleRemoveInterest(interest.id)}
                  className="ml-2 text-primary-600 hover:text-primary-800"
                  aria-label={`Remove ${interest.name}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
      
      {/* Available interests */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Available Interests</h3>
        
        {loading ? (
          <div className="text-center py-6">
            <p className="text-gray-500">Loading interests...</p>
          </div>
        ) : (
          <div>
            {/* Group by category for easier scanning */}
            {Array.from(new Set(getFilteredInterests().map(i => i.category))).map(category => (
              <div key={category} className="mb-4">
                <h4 className="text-sm font-medium text-gray-700 mb-2">{category}</h4>
                
                <div className="flex flex-wrap gap-2">
                  {getFilteredInterests()
                    .filter(interest => interest.category === category)
                    .map(interest => (
                      <button
                        key={interest.id}
                        onClick={() => handleInterestToggle(interest)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          isInterestAdded(interest.id)
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {interest.name}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InterestManager;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createActivity } from '../../services/communityService';
import { skillCategories } from '../../services/mockData';

/**
 * Component for creating a new community activity
 */
const ActivityForm = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  // Initial form state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    date: '',
    time: '',
    location: {
      displayName: '',
      lat: null,
      lng: null
    },
    maxParticipants: '',
    skillsInvolved: []
  });
  
  // Available categories for activities
  const activityCategories = [
    'Photography',
    'Music',
    'Tech',
    'Games',
    'Outdoors',
    'Arts',
    'Crafts',
    'Sports',
    'Food',
    'Learning'
  ];
  
  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'locationName') {
      setFormData({
        ...formData,
        location: {
          ...formData.location,
          displayName: value
        }
      });
    } else if (name === 'maxParticipants') {
      // Only allow numeric values
      if (value === '' || /^\d+$/.test(value)) {
        setFormData({
          ...formData,
          [name]: value
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  // Handle skill selection
  const handleSkillToggle = (skill) => {
    const updatedSkills = [...formData.skillsInvolved];
    
    if (updatedSkills.includes(skill)) {
      // Remove skill if already selected
      const index = updatedSkills.indexOf(skill);
      updatedSkills.splice(index, 1);
    } else {
      // Add skill if not already selected
      updatedSkills.push(skill);
    }
    
    setFormData({
      ...formData,
      skillsInvolved: updatedSkills
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccess('');
    
    try {
      // Validate form data
      if (!formData.title) throw new Error('Title is required');
      if (!formData.description) throw new Error('Description is required');
      if (!formData.category) throw new Error('Category is required');
      if (!formData.date) throw new Error('Date is required');
      if (!formData.time) throw new Error('Time is required');
      if (!formData.location.displayName) throw new Error('Location is required');
      
      // Combine date and time for a complete timestamp
      const dateTime = new Date(`${formData.date}T${formData.time}`);
      
      if (isNaN(dateTime.getTime())) {
        throw new Error('Invalid date or time format');
      }
      
      // For the POC, mock the geocoding by generating random coordinates near Seattle
      // In a real app, we would use a geocoding service
      const mockGeocode = {
        lat: 47.6062 + (Math.random() * 0.1 - 0.05),
        lng: -122.3321 + (Math.random() * 0.1 - 0.05)
      };
      
      // Create the activity data object
      const activityData = {
        title: formData.title,
        description: formData.description,
        category: formData.category,
        date: dateTime.toISOString(),
        location: {
          displayName: formData.location.displayName,
          lat: mockGeocode.lat,
          lng: mockGeocode.lng
        },
        maxParticipants: formData.maxParticipants ? parseInt(formData.maxParticipants, 10) : null,
        skillsInvolved: formData.skillsInvolved
      };
      
      // Create the activity
      const newActivity = createActivity(activityData);
      
      // Show success message
      setSuccess('Activity created successfully!');
      
      // Navigate to the new activity after a short delay
      setTimeout(() => {
        navigate(`/community/${newActivity.id}`);
      }, 1500);
      
    } catch (err) {
      setError(err.message || 'Failed to create activity');
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Get available skills based on selected category
  const getAvailableSkills = () => {
    if (!formData.category) return [];
    
    const categoryData = skillCategories.find(
      cat => cat.name.toLowerCase() === formData.category.toLowerCase()
    );
    
    return categoryData ? categoryData.skills : [];
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Create New Activity</h2>
        
        {/* Error and success messages */}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg">
            {success}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          {/* Basic information */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Basic Information</h3>
            
            <div className="space-y-4">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Activity Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="w-full input"
                  placeholder="E.g., Photography Workshop, Guitar Jam Session"
                  required
                />
              </div>
              
              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  className="w-full input"
                  required
                >
                  <option value="">Select a category</option>
                  {activityCategories.map(category => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full input"
                  placeholder="Describe your activity, what participants can expect, and any requirements"
                  required
                ></textarea>
              </div>
            </div>
          </div>
          
          {/* Date and time */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">When & Where</h3>
            
            <div className="space-y-4">
              {/* Date */}
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                  Date *
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full input"
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
              
              {/* Time */}
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                  Start Time *
                </label>
                <input
                  type="time"
                  id="time"
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className="w-full input"
                  required
                />
              </div>
              
              {/* Location */}
              <div>
                <label htmlFor="locationName" className="block text-sm font-medium text-gray-700 mb-1">
                  Location *
                </label>
                <input
                  type="text"
                  id="locationName"
                  name="locationName"
                  value={formData.location.displayName}
                  onChange={handleInputChange}
                  className="w-full input"
                  placeholder="E.g., Green Lake Park, North Entrance"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Enter the full address or a well-known location name
                </p>
              </div>
            </div>
          </div>
          
          {/* Additional details */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Details</h3>
            
            <div className="space-y-4">
              {/* Maximum participants */}
              <div>
                <label htmlFor="maxParticipants" className="block text-sm font-medium text-gray-700 mb-1">
                  Maximum Participants (Optional)
                </label>
                <input
                  type="text"
                  id="maxParticipants"
                  name="maxParticipants"
                  value={formData.maxParticipants}
                  onChange={handleInputChange}
                  className="w-full input"
                  placeholder="Leave blank for unlimited"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Set a limit for the number of people who can join
                </p>
              </div>
              
              {/* Skills involved */}
              {formData.category && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Skills Involved (Optional)
                  </label>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {getAvailableSkills().map(skill => (
                      <button
                        key={skill}
                        type="button"
                        onClick={() => handleSkillToggle(skill)}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                          formData.skillsInvolved.includes(skill)
                            ? 'bg-primary-500 text-white'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                  
                  {getAvailableSkills().length === 0 && (
                    <p className="text-sm text-gray-500 italic">
                      No specific skills available for this category
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
          
          {/* Form actions */}
          <div className="flex justify-between items-center">
            <button
              type="button"
              onClick={() => navigate('/community')}
              className="btn btn-secondary"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
            >
              {isSubmitting ? 'Creating...' : 'Create Activity'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ActivityForm;

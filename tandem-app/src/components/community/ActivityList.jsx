import React, { useState, useEffect } from 'react';
import ActivityCard from './ActivityCard';
import { getActivities } from '../../services/communityService';

/**
 * Component to display a list of community activities
 */
const ActivityList = ({ filters = {} }) => {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilters, setActiveFilters] = useState(filters);
  
  // Activity categories for filtering
  const categories = [
    'All',
    'Photography',
    'Music',
    'Tech',
    'Games',
    'Outdoors',
    'Arts',
    'Crafts'
  ];
  
  // Distance options for filtering
  const distanceOptions = [
    { value: 5, label: '5 miles' },
    { value: 10, label: '10 miles' },
    { value: 15, label: '15 miles' },
    { value: 25, label: '25 miles' },
    { value: 50, label: '50 miles' }
  ];
  
  // Load activities when component mounts or filters change
  useEffect(() => {
    const loadActivities = () => {
      setLoading(true);
      
      try {
        // Apply filters (only pass category if not "All")
        const filtersToApply = {
          ...activeFilters,
          category: activeFilters.category !== 'All' ? activeFilters.category : undefined
        };
        
        const activityData = getActivities(filtersToApply);
        setActivities(activityData);
      } catch (error) {
        console.error('Error loading activities:', error);
      } finally {
        setLoading(false);
      }
    };
    
    loadActivities();
  }, [activeFilters]);
  
  // Handle category filter change
  const handleCategoryChange = (category) => {
    setActiveFilters({
      ...activeFilters,
      category
    });
  };
  
  // Handle distance filter change
  const handleDistanceChange = (e) => {
    setActiveFilters({
      ...activeFilters,
      maxDistance: parseInt(e.target.value, 10)
    });
  };
  
  return (
    <div>
      {/* Filters */}
      <div className="mb-6">
        <h2 className="text-xl font-bold mb-4">Community Activities</h2>
        
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                activeFilters.category === category
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Distance filter */}
        <div className="flex items-center">
          <label className="text-sm text-gray-700 mr-2">Distance:</label>
          <select
            value={activeFilters.maxDistance || 15}
            onChange={handleDistanceChange}
            className="py-1 px-2 border border-gray-300 rounded text-sm"
          >
            {distanceOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      
      {/* Activity grid */}
      {loading ? (
        <div className="text-center py-8">
          <p className="text-gray-500">Loading activities...</p>
        </div>
      ) : activities.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <p className="text-gray-500 mb-2">No activities found with the current filters.</p>
          <p className="text-gray-700">Try adjusting your filters or create a new activity.</p>
          <button className="mt-4 btn btn-primary">
            Create Activity
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activities.map((activity, index) => (
            <div 
              key={activity.id} 
              className={`slide-up delay-${Math.min(index % 5 + 1, 5)}`}
            >
              <ActivityCard activity={activity} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ActivityList;

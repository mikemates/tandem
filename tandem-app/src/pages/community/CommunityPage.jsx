import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ActivityList from '../../components/community/ActivityList';
import ActivityDetail from '../../components/community/ActivityDetail';
import { getActivityById } from '../../services/communityService';

/**
 * Page component for community activities
 * Shows either a list of activities or a detailed view of a single activity
 */
const CommunityPage = () => {
  const { activityId } = useParams();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Default filters for activities list
  const defaultFilters = {
    category: 'All',
    maxDistance: 15
  };
  
  // Load activity details if an activityId is provided
  useEffect(() => {
    if (activityId) {
      setLoading(true);
      setError('');
      
      try {
        const activityData = getActivityById(activityId);
        
        if (activityData) {
          setActivity(activityData);
        } else {
          setError('Activity not found');
        }
      } catch (err) {
        console.error('Error loading activity:', err);
        setError('Failed to load activity');
      } finally {
        setLoading(false);
      }
    } else {
      // Reset activity state if no ID is provided
      setActivity(null);
    }
  }, [activityId]);
  
  // Show loading state
  if (loading) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }
  
  // Show error state
  if (error) {
    return (
      <div className="py-8 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }
  
  return (
    <div>
      {/* Page title */}
      {!activityId && (
        <h1 className="text-2xl font-bold mb-6">Community Activities</h1>
      )}
      
      {/* Show either activity detail or activity list */}
      {activityId && activity ? (
        <ActivityDetail activity={activity} />
      ) : (
        <ActivityList filters={defaultFilters} />
      )}
    </div>
  );
};

export default CommunityPage;

import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import ActivityList from '../../components/community/ActivityList';
import ActivityDetail from '../../components/community/ActivityDetail';
import ActivityForm from '../../components/community/ActivityForm';
import { getActivityById } from '../../services/communityService';

/**
 * Page component for community activities
 * Shows either a list of activities, a detailed view of a single activity,
 * or the form to create a new activity
 */
const CommunityPage = ({ mode = 'list' }) => {
  const navigate = useNavigate();
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
      {/* Page title with create button */}
      {!activityId && mode !== 'create' && (
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Community Activities</h1>
          
          <Link to="/community/create" className="btn btn-primary">
            Create Activity
          </Link>
        </div>
      )}
      
      {/* Show appropriate component based on mode and params */}
      {mode === 'create' ? (
        <ActivityForm />
      ) : activityId && activity ? (
        <ActivityDetail activity={activity} />
      ) : (
        <ActivityList filters={defaultFilters} />
      )}
    </div>
  );
};

export default CommunityPage;

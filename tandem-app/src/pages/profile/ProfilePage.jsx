import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProfileView from '../../components/profile/ProfileView';
import ProfileEditForm from '../../components/profile/ProfileEditForm';
import { getCurrentUserProfile, getUserProfileById } from '../../services/profileService';

/**
 * Page component for the profile section
 * Handles both viewing and editing profiles
 */
const ProfilePage = ({ mode = 'view' }) => {
  const { userId } = useParams();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isCurrentUser, setIsCurrentUser] = useState(false);

  useEffect(() => {
    const loadProfile = async () => {
      setLoading(true);
      setError('');

      try {
        let profileData;
        
        // If no userId is provided, or it matches the current user's ID,
        // load the current user's profile
        if (!userId) {
          profileData = getCurrentUserProfile();
          setIsCurrentUser(true);
        } else {
          // Check if the requested profile is the current user
          const currentUserProfile = getCurrentUserProfile();
          if (userId === currentUserProfile.id) {
            profileData = currentUserProfile;
            setIsCurrentUser(true);
          } else {
            // Load another user's profile
            profileData = getUserProfileById(userId);
            setIsCurrentUser(false);
          }
        }

        setProfile(profileData);
      } catch (err) {
        console.error('Error loading profile:', err);
        setError('Failed to load profile');
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, [userId]);

  // Render loading state
  if (loading) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="py-8 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  // Render not found state
  if (!profile) {
    return (
      <div className="py-8 text-center">
        <p className="text-gray-500">Profile not found</p>
      </div>
    );
  }

  // Render edit form if in edit mode and it's the current user
  if (mode === 'edit' && isCurrentUser) {
    return <ProfileEditForm />;
  }

  // If it's not in edit mode or not the current user, show profile view
  return <ProfileView profile={profile} isCurrentUser={isCurrentUser} />;
};

export default ProfilePage;

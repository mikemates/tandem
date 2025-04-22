import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProfileView from '../../components/profile/ProfileView';
import ProfileEditForm from '../../components/profile/ProfileEditForm';
import SkillManager from '../../components/profile/SkillManager';
import InterestManager from '../../components/profile/InterestManager';
import { getCurrentUserProfile, getUserProfileById } from '../../services/profileService';

/**
 * Page component for the profile section
 * Handles viewing, editing profiles, and managing skills and interests
 * Available modes: 'view', 'edit', 'skills', 'interests'
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

  // Render the appropriate component based on mode (and if current user)
  const renderContent = () => {
    // Only allow editing, skill management, and interest management for the current user
    if (!isCurrentUser && mode !== 'view') {
      return <ProfileView profile={profile} isCurrentUser={false} />;
    }
    
    switch (mode) {
      case 'edit':
        return <ProfileEditForm profile={profile} />;
      case 'skills':
        return <SkillManager userId={profile.id} />;
      case 'interests':
        return <InterestManager userId={profile.id} />;
      case 'view':
      default:
        return <ProfileView profile={profile} isCurrentUser={isCurrentUser} />;
    }
  };
  
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">
          {mode === 'edit' ? 'Edit Profile' : 
           mode === 'skills' ? 'Manage Skills' :
           mode === 'interests' ? 'Manage Interests' :
           isCurrentUser ? 'Your Profile' : `${profile.name}'s Profile`}
        </h1>
        
        {/* Profile navigation for current user */}
        {isCurrentUser && (
          <div className="flex flex-wrap gap-2 mt-2">
            <Link 
              to="/profile" 
              className={`px-3 py-1 rounded-full text-sm ${mode === 'view' ? 'bg-primary-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              View Profile
            </Link>
            <Link 
              to="/profile/edit" 
              className={`px-3 py-1 rounded-full text-sm ${mode === 'edit' ? 'bg-primary-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Edit Profile
            </Link>
            <Link 
              to="/profile/skills" 
              className={`px-3 py-1 rounded-full text-sm ${mode === 'skills' ? 'bg-primary-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Manage Skills
            </Link>
            <Link 
              to="/profile/interests" 
              className={`px-3 py-1 rounded-full text-sm ${mode === 'interests' ? 'bg-primary-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
            >
              Manage Interests
            </Link>
          </div>
        )}
      </div>
      
      {/* Render the appropriate content based on mode */}
      <div className="scale-in">
        {renderContent()}
      </div>
    </div>
  );
};

export default ProfilePage;

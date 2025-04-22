import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getCurrentUserProfile, updateUserProfile, updateProfilePhoto } from '../../services/profileService';
import ProfilePhotoUploader from './ProfilePhotoUploader';

/**
 * Component for editing basic profile information
 */
const ProfileEditForm = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    location: {
      displayName: '',
      lat: 0,
      lng: 0
    }
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Load the current user profile
  useEffect(() => {
    try {
      const currentProfile = getCurrentUserProfile();
      setProfile(currentProfile);
      setFormData({
        name: currentProfile.name || '',
        bio: currentProfile.bio || '',
        location: {
          displayName: currentProfile.location?.displayName || '',
          lat: currentProfile.location?.lat || 0,
          lng: currentProfile.location?.lng || 0
        }
      });
    } catch (err) {
      setError('Failed to load profile data');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'locationName') {
      setFormData(prev => ({
        ...prev,
        location: {
          ...prev.location,
          displayName: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    try {
      // In a real app, we would validate the location data by geocoding the address
      // For the POC, we'll just keep the existing coordinates
      const updatedProfile = updateUserProfile({
        name: formData.name,
        bio: formData.bio,
        location: {
          ...profile.location,
          displayName: formData.location.displayName
        }
      });
      
      setProfile(updatedProfile);
      setSuccess('Profile updated successfully');
      
      // Navigate back to profile view after a short delay
      setTimeout(() => {
        navigate('/profile');
      }, 1500);
    } catch (err) {
      setError('Failed to update profile');
      console.error(err);
    }
  };

  // Handle cancel
  const handleCancel = () => {
    navigate('/profile');
  };

  if (loading) {
    return <div className="p-4 text-center text-gray-500">Loading profile data...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Profile Photo Section */}
      <ProfilePhotoUploader 
        userId={profile.id}
        currentPhotoUrl={profile.profilePhotoUrl}
        onPhotoUpdate={(newPhotoUrl) => {
          setProfile(prev => ({
            ...prev,
            profilePhotoUrl: newPhotoUrl
          }));
        }}
      />
      
      {/* Profile Details Section */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Edit Profile</h2>
          
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
            {/* Name field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full input"
                required
              />
            </div>
            
            {/* Location field */}
            <div className="mb-4">
              <label htmlFor="locationName" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <input
                type="text"
                id="locationName"
                name="locationName"
                value={formData.location.displayName}
                onChange={handleChange}
                className="w-full input"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                Enter your city and state/province (e.g., Seattle, WA)
              </p>
            </div>
            
            {/* Bio field */}
            <div className="mb-6">
              <label htmlFor="bio" className="block text-sm font-medium text-gray-700 mb-1">
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={formData.bio}
                onChange={handleChange}
                rows="4"
                className="w-full input"
                placeholder="Tell others about yourself..."
              ></textarea>
            </div>
            
            {/* Form actions */}
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleCancel}
                className="btn btn-secondary"
              >
                Cancel
              </button>
              
              <button
                type="submit"
                className="btn btn-primary"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditForm;

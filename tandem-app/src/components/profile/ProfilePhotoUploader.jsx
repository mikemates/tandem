import React, { useState, useRef } from 'react';
import { updateProfilePhoto } from '../../services/profileService';

/**
 * Component for uploading and managing profile photos
 */
const ProfilePhotoUploader = ({ userId, currentPhotoUrl, onPhotoUpdate }) => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  
  const fileInputRef = useRef(null);
  
  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Validate file type
    if (!file.type.match('image.*')) {
      setError('Please select an image file (PNG, JPG, JPEG)');
      return;
    }
    
    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }
    
    // Reset error state and create preview
    setError('');
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  
  // Trigger file input click
  const handleUploadClick = () => {
    fileInputRef.current.click();
  };
  
  // Cancel upload and reset preview
  const handleCancelUpload = () => {
    setPreviewUrl(null);
    setError('');
    fileInputRef.current.value = '';
  };
  
  // Submit the photo
  const handleSubmitPhoto = async () => {
    if (!previewUrl) return;
    
    setIsUploading(true);
    setError('');
    
    try {
      // For demo, we're just passing the Data URL
      // In a real app, you would upload to a server
      const updatedProfile = await updateProfilePhoto(userId, previewUrl);
      
      setSuccess('Profile photo updated successfully');
      setPreviewUrl(null);
      
      // Notify parent component
      if (onPhotoUpdate) {
        onPhotoUpdate(updatedProfile.profilePhotoUrl);
      }
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSuccess('');
      }, 3000);
      
    } catch (err) {
      setError(err.message || 'Failed to update profile photo');
      console.error(err);
    } finally {
      setIsUploading(false);
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4">Profile Photo</h2>
      
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
      
      {/* Current photo */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
        <div className="relative">
          <div className="h-32 w-32 rounded-full overflow-hidden border-2 border-gray-200">
            <img 
              src={previewUrl || currentPhotoUrl || 'https://via.placeholder.com/150?text=No+Photo'} 
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>
          
          {previewUrl && (
            <div className="absolute top-0 right-0 -m-2">
              <button
                onClick={handleCancelUpload}
                className="bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center hover:bg-red-600"
                aria-label="Cancel"
              >
                ×
              </button>
            </div>
          )}
        </div>
        
        <div className="flex flex-col gap-2">
          {/* Hidden file input */}
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            accept="image/*"
            onChange={handleFileChange}
          />
          
          {/* Visible buttons */}
          {!previewUrl ? (
            <button
              onClick={handleUploadClick}
              className="btn btn-primary"
              disabled={isUploading}
            >
              {isUploading ? 'Uploading...' : 'Upload New Photo'}
            </button>
          ) : (
            <button
              onClick={handleSubmitPhoto}
              className="btn btn-primary"
              disabled={isUploading}
            >
              {isUploading ? 'Saving...' : 'Save New Photo'}
            </button>
          )}
          
          <p className="text-sm text-gray-500">
            Recommended: Square image, at least 300x300 pixels
          </p>
        </div>
      </div>
      
      {/* Photo guidelines */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Photo Guidelines</h3>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Clear, recent photo of yourself</li>
          <li>You should be the main subject of the photo</li>
          <li>Maximum file size: 5MB</li>
          <li>Supported formats: JPG, PNG</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePhotoUploader;

import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Component for displaying user profile information
 */
const ProfileView = ({ profile, isCurrentUser = false }) => {
  if (!profile) {
    return <div className="p-4 text-center text-gray-500">Profile not found</div>;
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="relative">
        {/* Cover image - would be user's cover photo in a real app */}
        <div className="h-32 bg-gradient-to-r from-primary-600 to-primary-400"></div>
        
        {/* Profile photo and verification status */}
        <div className="px-6 pb-4">
          <div className="flex justify-between items-end -mt-16">
            <div className="relative">
              <img 
                src={profile.profilePhotoUrl} 
                alt={`${profile.name}'s profile`} 
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />
              {profile.verificationStatus === 'verified' && (
                <span className="absolute bottom-0 right-0 bg-green-500 text-white text-xs px-1 py-0.5 rounded-full">
                  ✓ Verified
                </span>
              )}
            </div>
            
            {isCurrentUser && (
              <Link to="/profile/edit" className="btn btn-secondary text-sm">
                Edit Profile
              </Link>
            )}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="px-6 py-4">
        {/* Basic info */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{profile.name}</h2>
          <p className="text-gray-600">
            {profile.location?.displayName}
          </p>
          <p className="mt-3 text-gray-700">{profile.bio}</p>
        </div>
        
        {/* Skills section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-gray-900">Skills</h3>
            {isCurrentUser && (
              <Link to="/profile/edit-skills" className="text-sm text-primary-600 hover:text-primary-800">
                Manage Skills
              </Link>
            )}
          </div>
          
          {profile.skills.length === 0 ? (
            <p className="text-gray-500 italic">No skills added yet.</p>
          ) : (
            <div className="space-y-2">
              {profile.skills.map(skill => (
                <div key={skill.specific} className="border border-gray-200 p-3 rounded-lg">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-800">{skill.specific}</span>
                    <span className="text-sm text-gray-600">{skill.proficiency}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    Category: {skill.category} • Available: {skill.availability}
                  </p>
                  {skill.description && (
                    <p className="text-sm text-gray-700 mt-2">
                      {skill.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {/* Interests section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-gray-900">Interests</h3>
            {isCurrentUser && (
              <Link to="/profile/edit-interests" className="text-sm text-primary-600 hover:text-primary-800">
                Manage Interests
              </Link>
            )}
          </div>
          
          {profile.interests.length === 0 ? (
            <p className="text-gray-500 italic">No interests added yet.</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {profile.interests.map(interest => (
                <span key={interest} className="badge badge-interest">
                  {interest}
                </span>
              ))}
            </div>
          )}
        </div>
        
        {/* Looking for section */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-gray-900">Looking For</h3>
            {isCurrentUser && (
              <Link to="/profile/edit-seeking" className="text-sm text-primary-600 hover:text-primary-800">
                Manage
              </Link>
            )}
          </div>
          
          {profile.seeking.length === 0 ? (
            <p className="text-gray-500 italic">Not looking for anything specific yet.</p>
          ) : (
            <div className="space-y-2">
              {profile.seeking.map(item => (
                <div key={item.skill} className="bg-secondary-50 p-3 rounded-lg">
                  <div className="flex justify-between">
                    <span className="font-medium text-secondary-800">{item.skill}</span>
                    <span className="text-sm text-secondary-600">{item.experienceLevel}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileView;

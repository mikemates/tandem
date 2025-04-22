import React from 'react';
import { Link } from 'react-router-dom';

/**
 * MatchDetail component shows detailed information about a match
 */
const MatchDetail = ({ match, onBackClick, onConnectClick }) => {
  if (!match) {
    return (
      <div className="py-10 text-center bg-white rounded-lg shadow-md">
        <p className="text-gray-500">Match not found.</p>
        <Link 
          to="/matches"
          className="mt-3 btn btn-secondary inline-block text-sm"
        >
          Back to Matches
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* Header */}
      <div className="relative">
        {/* Background cover image - would be user's cover photo in a real app */}
        <div className="h-32 bg-gradient-to-r from-primary-600 to-primary-400"></div>
        
        {/* Profile photo and match score */}
        <div className="px-6 pb-4">
          <div className="flex justify-between items-end -mt-16">
            <div className="relative">
              <img 
                src={match.profilePhotoUrl} 
                alt={`${match.name}'s profile`} 
                className="w-24 h-24 rounded-full border-4 border-white object-cover"
              />
              {match.verificationStatus === 'verified' && (
                <span className="absolute bottom-0 right-0 bg-green-500 text-white text-xs px-1 py-0.5 rounded-full">
                  ✓ Verified
                </span>
              )}
            </div>
            <span className="match-score text-lg px-3 py-1">{match.matchScore}%</span>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="px-6 py-4">
        {/* Basic info */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{match.name}</h2>
          <p className="text-gray-600">
            {match.location?.displayName} • {match.distance} mile{match.distance !== 1 ? 's' : ''} away
          </p>
          <p className="mt-3 text-gray-700">{match.bio}</p>
        </div>
        
        {/* Match quality section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Why You Match</h3>
          
          {/* Skills they offer that you want */}
          {match.matchDetails?.skillsTheyOffer?.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Skills They Can Share With You
              </h4>
              <div className="space-y-2">
                {match.matchDetails.skillsTheyOffer.map(skill => (
                  <div key={skill.skill} className="bg-primary-50 p-3 rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-medium text-primary-800">{skill.skill}</span>
                      <span className="text-sm text-primary-600">{skill.theirLevel}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      You're interested in learning this as a {skill.yourInterest}.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Skills you offer that they want */}
          {match.matchDetails?.skillsYouOffer?.length > 0 && (
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Skills You Can Share With Them
              </h4>
              <div className="space-y-2">
                {match.matchDetails.skillsYouOffer.map(skill => (
                  <div key={skill.skill} className="bg-secondary-50 p-3 rounded-lg">
                    <div className="flex justify-between">
                      <span className="font-medium text-secondary-800">{skill.skill}</span>
                      <span className="text-sm text-secondary-600">{skill.yourLevel}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      They're interested in learning this as a {skill.theirInterest}.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {/* Shared interests */}
          {match.matchDetails?.sharedInterests?.length > 0 && (
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-2">
                Shared Interests
              </h4>
              <div className="flex flex-wrap gap-2">
                {match.matchDetails.sharedInterests.map(interest => (
                  <span key={interest} className="badge badge-interest">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        
        {/* All skills */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Their Skills</h3>
          <div className="space-y-2">
            {match.skills.map(skill => (
              <div key={skill.specific} className="border border-gray-200 p-3 rounded-lg">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-800">{skill.specific}</span>
                  <span className="text-sm text-gray-600">{skill.proficiency}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Available: {skill.availability}
                </p>
                {skill.description && (
                  <p className="text-sm text-gray-700 mt-2">
                    {skill.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* All interests */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Their Interests</h3>
          <div className="flex flex-wrap gap-2">
            {match.interests.map(interest => (
              <span key={interest} className="badge badge-interest">
                {interest}
              </span>
            ))}
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          <button 
            onClick={onBackClick}
            className="btn btn-secondary"
          >
            Back to Matches
          </button>
          
          <button 
            onClick={() => onConnectClick(match.id)}
            className="btn btn-primary"
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default MatchDetail;

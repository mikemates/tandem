import React from 'react';
import { Link } from 'react-router-dom';

/**
 * MatchCard component displays a summary of a user match
 */
const MatchCard = ({ match }) => {
  return (
    <div className="card hover:shadow-lg transition-medium">
      <div className="p-4">
        <div className="flex items-start gap-4">
          {/* Profile photo */}
          <div className="flex-shrink-0">
            <img 
              src={match.profilePhotoUrl} 
              alt={`${match.name}'s profile`} 
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          
          {/* Match info */}
          <div className="flex-grow">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold text-gray-900">{match.name}</h3>
              <span className="match-score">{match.matchScore}%</span>
            </div>
            
            <p className="text-sm text-gray-600">
              {match.location?.displayName} • {match.distance} mile{match.distance !== 1 ? 's' : ''} away
            </p>
            
            {/* Primary skill */}
            {match.skills && match.skills.length > 0 && (
              <div className="mt-2">
                <span className="badge badge-skill">
                  {match.skills[0].specific} • {match.skills[0].proficiency}
                </span>
              </div>
            )}
            
            {/* Match reason */}
            <div className="mt-2">
              {match.matchDetails?.skillsTheyOffer?.length > 0 && (
                <p className="text-sm text-primary-700">
                  Offers {match.matchDetails.skillsTheyOffer[0].skill} that you're seeking
                </p>
              )}
              
              {match.matchDetails?.skillsYouOffer?.length > 0 && (
                <p className="text-sm text-primary-700">
                  Seeking {match.matchDetails.skillsYouOffer[0].skill} that you offer
                </p>
              )}
              
              {match.matchDetails?.sharedInterests?.length > 0 && (
                <p className="text-sm text-secondary-700">
                  {match.matchDetails.sharedInterests.length} shared interest{match.matchDetails.sharedInterests.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex justify-end mt-4">
          <Link 
            to={`/matches/${match.id}`}
            className="text-sm font-medium text-primary-600 hover:text-primary-800"
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;

import React, { useState, useEffect } from 'react';
import MatchCard from './MatchCard';
import { getPotentialMatches } from '../../services/matchingService';

/**
 * MatchList component displays a list of potential matches with filters
 */
const MatchList = () => {
  const [matches, setMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    skillsOnly: false,
    interestsOnly: false,
    maxDistance: 20
  });

  // Fetch matches on component mount and filter changes
  useEffect(() => {
    setLoading(true);
    const potentialMatches = getPotentialMatches(filters);
    setMatches(potentialMatches);
    setLoading(false);
  }, [filters]);

  // Update filters
  const handleFilterChange = (key, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [key]: value
    }));
  };

  // Range slider for distance
  const handleDistanceChange = (e) => {
    handleFilterChange('maxDistance', parseInt(e.target.value, 10));
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <h2 className="text-lg font-semibold mb-3">Filter Matches</h2>
        
        <div className="space-y-4">
          {/* Skills/Interests filters */}
          <div className="flex flex-wrap gap-3">
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-primary-600"
                checked={filters.skillsOnly}
                onChange={(e) => handleFilterChange('skillsOnly', e.target.checked)}
              />
              <span className="ml-2 text-sm text-gray-700">Skills Match</span>
            </label>
            
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-primary-600"
                checked={filters.interestsOnly}
                onChange={(e) => handleFilterChange('interestsOnly', e.target.checked)}
              />
              <span className="ml-2 text-sm text-gray-700">Shared Interests</span>
            </label>
          </div>
          
          {/* Distance slider */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Maximum Distance: {filters.maxDistance} miles
            </label>
            <input
              type="range"
              min="1"
              max="50"
              step="1"
              value={filters.maxDistance}
              onChange={handleDistanceChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 mile</span>
              <span>25 miles</span>
              <span>50 miles</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Match results */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Your Matches</h2>
          <p className="text-sm text-gray-600">{matches.length} potential connections</p>
        </div>
        
        {loading ? (
          <div className="py-10 text-center">
            <p className="text-gray-500">Loading matches...</p>
          </div>
        ) : matches.length === 0 ? (
          <div className="py-10 text-center bg-white rounded-lg shadow-sm">
            <p className="text-gray-500">No matches found with current filters.</p>
            <button 
              onClick={() => setFilters({
                skillsOnly: false,
                interestsOnly: false,
                maxDistance: 20
              })}
              className="mt-3 btn btn-secondary text-sm"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-4">
            {matches.map((match, index) => (
              <div 
                key={match.id} 
                className={`slide-in-right delay-${Math.min(index % 5 + 1, 5)}`}
              >
                <MatchCard match={match} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchList;

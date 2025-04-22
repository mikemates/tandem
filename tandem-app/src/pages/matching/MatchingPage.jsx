import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import MatchList from '../../components/matching/MatchList';
import MatchDetail from '../../components/matching/MatchDetail';
import { getMatchById } from '../../services/matchingService';

/**
 * MatchingPage component serves as the container for both the match list and detail views
 */
const MatchingPage = () => {
  const { matchId } = useParams();
  const navigate = useNavigate();
  const [selectedMatch, setSelectedMatch] = useState(null);
  const [loading, setLoading] = useState(false);

  // If matchId is provided, load the specific match
  useEffect(() => {
    if (matchId) {
      setLoading(true);
      const match = getMatchById(matchId);
      setSelectedMatch(match);
      setLoading(false);
    } else {
      setSelectedMatch(null);
    }
  }, [matchId]);

  // Handle back button click from match detail
  const handleBackClick = () => {
    navigate('/matches');
  };

  // Handle connect button click
  const handleConnectClick = (userId) => {
    // In a real app, this would initiate a connection request
    // For the POC, we'll just navigate to the messaging page
    navigate(`/messages`);
  };

  return (
    <div>
      {matchId ? (
        // Show match detail when a match ID is provided
        loading ? (
          <div className="py-10 text-center">
            <p className="text-gray-500">Loading match details...</p>
          </div>
        ) : (
          <MatchDetail 
            match={selectedMatch} 
            onBackClick={handleBackClick} 
            onConnectClick={handleConnectClick}
          />
        )
      ) : (
        // Show match list when no match ID is provided
        <MatchList />
      )}
    </div>
  );
};

export default MatchingPage;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getConversations } from '../../services/messagingService';
import { mockUsers } from '../../services/mockData';

/**
 * Component to display a list of conversations
 */
const ConversationList = () => {
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load conversations on component mount
  useEffect(() => {
    const loadConversations = () => {
      setLoading(true);
      const userConversations = getConversations();
      
      // Enrich the conversations with participant details
      const enrichedConversations = userConversations.map(conversation => {
        const otherParticipantId = conversation.participants.find(id => id !== 'user123');
        const otherParticipant = mockUsers.find(user => user.id === otherParticipantId);
        
        return {
          ...conversation,
          otherParticipant
        };
      });
      
      setConversations(enrichedConversations);
      setLoading(false);
    };
    
    loadConversations();
  }, []);

  // Format timestamp to a readable format
  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      // Today, show time
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffInDays === 1) {
      // Yesterday
      return 'Yesterday';
    } else if (diffInDays < 7) {
      // This week, show day name
      return date.toLocaleDateString([], { weekday: 'short' });
    } else {
      // More than a week ago, show date
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  if (loading) {
    return <div className="p-4 text-center text-gray-500">Loading conversations...</div>;
  }

  if (conversations.length === 0) {
    return (
      <div className="p-6 text-center bg-white rounded-xl shadow-md">
        <p className="text-gray-500 mb-4">No conversations yet.</p>
        <p className="text-gray-600">Start by connecting with someone from your matches!</p>
        <Link to="/matches" className="mt-4 btn btn-primary inline-block">
          Find Matches
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Your Conversations</h2>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {conversations.map(conversation => (
          <Link 
            key={conversation.id} 
            to={`/messages/${conversation.id}`}
            className={`block p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors flex items-start ${
              conversation.unreadCount > 0 ? 'bg-blue-50' : ''
            }`}
          >
            {/* Profile photo */}
            <div className="flex-shrink-0 mr-3">
              <img 
                src={conversation.otherParticipant?.profilePhotoUrl} 
                alt={conversation.otherParticipant?.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
            </div>
            
            {/* Conversation preview */}
            <div className="flex-grow min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium text-gray-900 truncate">
                  {conversation.otherParticipant?.name || 'Unknown User'}
                </h3>
                <span className="text-xs text-gray-500 ml-2 flex-shrink-0">
                  {formatTimestamp(conversation.lastMessageTimestamp)}
                </span>
              </div>
              
              <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
              
              {conversation.unreadCount > 0 && (
                <span className="inline-block bg-primary-500 text-white text-xs px-2 py-1 rounded-full mt-1">
                  {conversation.unreadCount} new
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;

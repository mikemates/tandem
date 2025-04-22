import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ConversationList from '../../components/messaging/ConversationList';
import MessageThread from '../../components/messaging/MessageThread';
import { getConversationById, getOtherParticipantId, markConversationAsRead } from '../../services/messagingService';
import { mockUsers } from '../../services/mockData';

/**
 * MessagingPage component that handles the messaging interface
 * Displays conversations list and active message thread
 */
const MessagingPage = () => {
  const { conversationId } = useParams();
  const [activeConversation, setActiveConversation] = useState(null);
  const [otherUser, setOtherUser] = useState(null);
  const [showMobileConversations, setShowMobileConversations] = useState(!conversationId);
  
  // Load the conversation and other user when the conversation ID changes
  useEffect(() => {
    if (conversationId) {
      // Load conversation
      const conversation = getConversationById(conversationId);
      setActiveConversation(conversation);
      
      // Load other user
      if (conversation) {
        const otherParticipantId = getOtherParticipantId(conversation);
        const user = mockUsers.find(user => user.id === otherParticipantId);
        setOtherUser(user);
        
        // Mark conversation as read
        markConversationAsRead(conversationId);
      }
      
      // On mobile, show the message thread
      setShowMobileConversations(false);
    } else {
      // No conversation selected
      setActiveConversation(null);
      setOtherUser(null);
      
      // On mobile, show the conversations list
      setShowMobileConversations(true);
    }
  }, [conversationId]);
  
  // Handle back button on mobile
  const handleBack = () => {
    setShowMobileConversations(true);
  };
  
  return (
    <div className="h-[calc(100vh-12rem)]">
      {/* Mobile Navigation */}
      <div className="md:hidden mb-4">
        {conversationId && !showMobileConversations ? (
          <button 
            onClick={handleBack}
            className="flex items-center text-gray-600"
          >
            <span className="mr-1">←</span> Back to conversations
          </button>
        ) : (
          <h1 className="text-xl font-bold">Messaging</h1>
        )}
      </div>
      
      <div className="flex h-full rounded-xl overflow-hidden bg-white shadow-md">
        {/* Conversations Sidebar - hidden on mobile when viewing a conversation */}
        <div 
          className={`${
            showMobileConversations ? 'block' : 'hidden'
          } md:block w-full md:w-1/3 lg:w-1/4 border-r border-gray-200 overflow-y-auto`}
        >
          <ConversationList />
        </div>
        
        {/* Message Thread - hidden on mobile when viewing conversations list */}
        <div 
          className={`${
            !showMobileConversations ? 'block' : 'hidden'
          } md:block flex-grow`}
        >
          {conversationId ? (
            <MessageThread 
              conversationId={conversationId}
              otherUser={otherUser}
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gray-50">
              <div className="text-center p-6">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Select a conversation</h3>
                <p className="text-gray-500 mb-4">Choose a conversation from the list or start a new one</p>
                <Link to="/matches" className="btn btn-primary">
                  Find people to message
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MessagingPage;

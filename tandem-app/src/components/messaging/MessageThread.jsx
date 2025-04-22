import React, { useState, useEffect, useRef } from 'react';
import { getMessagesByConversationId, sendMessage } from '../../services/messagingService';
import { currentUser } from '../../services/mockData';

/**
 * Component to display and interact with a message thread
 */
const MessageThread = ({ conversationId, otherUser }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const messagesEndRef = useRef(null);

  // Load messages on component mount and when conversation changes
  useEffect(() => {
    if (conversationId) {
      setLoading(true);
      const conversationMessages = getMessagesByConversationId(conversationId);
      setMessages(conversationMessages);
      setLoading(false);
    }
  }, [conversationId]);

  // Scroll to bottom of messages when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Handle sending a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (!newMessage.trim()) return;
    
    // Send the message
    const sentMessage = sendMessage(conversationId, newMessage);
    
    // Update the UI
    setMessages([...messages, sentMessage]);
    setNewMessage('');
  };

  // Format timestamp for display
  const formatMessageTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  if (loading) {
    return <div className="p-4 text-center text-gray-500">Loading messages...</div>;
  }

  return (
    <div className="flex flex-col h-full">
      {/* Message header */}
      {otherUser && (
        <div className="bg-white border-b border-gray-200 p-4 flex items-center">
          <div className="flex-shrink-0 mr-3">
            <img 
              src={otherUser.profilePhotoUrl} 
              alt={otherUser.name} 
              className="w-10 h-10 rounded-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{otherUser.name}</h3>
            <p className="text-xs text-gray-500">{otherUser.location?.displayName}</p>
          </div>
        </div>
      )}
      
      {/* Message list */}
      <div className="flex-grow p-4 overflow-y-auto bg-gray-50">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 my-8">
            <p>No messages yet.</p>
            <p>Say hello to start the conversation!</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map(message => (
              <div 
                key={message.id} 
                className={`flex ${message.senderId === currentUser.id ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-xs md:max-w-md rounded-lg p-3 ${
                    message.senderId === currentUser.id 
                      ? 'bg-primary-500 text-white rounded-br-none' 
                      : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                  }`}
                >
                  <p className="break-words">{message.content}</p>
                  <p 
                    className={`text-xs mt-1 text-right ${
                      message.senderId === currentUser.id ? 'text-primary-100' : 'text-gray-500'
                    }`}
                  >
                    {formatMessageTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>
      
      {/* Message composer */}
      <div className="bg-white border-t border-gray-200 p-4">
        <form onSubmit={handleSendMessage} className="flex">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow input mr-2"
            autoFocus
          />
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={!newMessage.trim()}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default MessageThread;

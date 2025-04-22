// Messaging service for Tandem
// Handles conversation and message operations

import { mockMessages, mockConversations, currentUser } from './mockData';

/**
 * Get all conversations for the current user
 * @returns {Array} Array of conversations
 */
export function getConversations() {
  // In a real app, this would filter server-side
  return mockConversations.filter(conversation => 
    conversation.participants.includes(currentUser.id)
  );
}

/**
 * Get a conversation by ID
 * @param {string} conversationId - The conversation ID
 * @returns {Object|null} - The conversation or null if not found
 */
export function getConversationById(conversationId) {
  return mockConversations.find(conversation => conversation.id === conversationId) || null;
}

/**
 * Get messages for a specific conversation
 * @param {string} conversationId - The conversation ID
 * @returns {Array} - Array of messages
 */
export function getMessagesByConversationId(conversationId) {
  // In a real app, this would filter server-side and include pagination
  return mockMessages
    .filter(message => message.conversationId === conversationId)
    .sort((a, b) => new Date(a.timestamp) - new Date(b.timestamp));
}

/**
 * Get the other participant in a conversation (not the current user)
 * @param {Object} conversation - The conversation object
 * @returns {string} - User ID of the other participant
 */
export function getOtherParticipantId(conversation) {
  return conversation.participants.find(id => id !== currentUser.id);
}

/**
 * Send a new message in a conversation
 * @param {string} conversationId - The conversation ID
 * @param {string} content - The message content
 * @returns {Object} - The new message
 */
export function sendMessage(conversationId, content) {
  const conversation = getConversationById(conversationId);
  
  if (!conversation) {
    throw new Error(`Conversation with ID ${conversationId} not found`);
  }
  
  const receiverId = getOtherParticipantId(conversation);
  
  // Create a new message
  const newMessage = {
    id: `msg${Date.now()}`, // Generate a unique ID
    conversationId,
    senderId: currentUser.id,
    receiverId,
    content,
    timestamp: new Date().toISOString(),
    read: false
  };
  
  // In a real app, this would be sent to the server
  // For the POC, we'll just add it to our mock data
  mockMessages.push(newMessage);
  
  // Update the conversation's last message info
  conversation.lastMessage = content;
  conversation.lastMessageTimestamp = newMessage.timestamp;
  
  return newMessage;
}

/**
 * Mark all messages in a conversation as read
 * @param {string} conversationId - The conversation ID
 */
export function markConversationAsRead(conversationId) {
  // In a real app, this would update the server
  mockMessages.forEach(message => {
    if (message.conversationId === conversationId && message.receiverId === currentUser.id) {
      message.read = true;
    }
  });
  
  // Update unread count in conversation
  const conversation = getConversationById(conversationId);
  if (conversation) {
    conversation.unreadCount = 0;
  }
}

/**
 * Start a new conversation with another user
 * @param {string} otherUserId - The ID of the user to start a conversation with
 * @param {string} initialMessage - The first message to send
 * @returns {Object} - The new conversation
 */
export function startConversation(otherUserId, initialMessage) {
  // Check if a conversation already exists
  const existingConversation = mockConversations.find(convo => 
    convo.participants.includes(currentUser.id) && 
    convo.participants.includes(otherUserId)
  );
  
  if (existingConversation) {
    // If it exists, just send a message in it
    sendMessage(existingConversation.id, initialMessage);
    return existingConversation;
  }
  
  // Create a new conversation
  const newConversation = {
    id: `conv${Date.now()}`, // Generate a unique ID
    participants: [currentUser.id, otherUserId],
    lastMessage: initialMessage,
    lastMessageTimestamp: new Date().toISOString(),
    unreadCount: 0
  };
  
  // In a real app, this would be sent to the server
  // For the POC, we'll just add it to our mock data
  mockConversations.push(newConversation);
  
  // Send the initial message
  sendMessage(newConversation.id, initialMessage);
  
  return newConversation;
}

/**
 * Get the unread message count across all conversations
 * @returns {number} - Total unread message count
 */
export function getTotalUnreadCount() {
  return mockConversations.reduce((total, conversation) => total + conversation.unreadCount, 0);
}

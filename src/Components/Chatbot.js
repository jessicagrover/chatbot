import React, { useState } from 'react';
import ChatWindow from './ChatWindow.js';
import ChatInput from './ChatInput.js';
import { getBotResponse } from '../utils/nlp.js';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { sender: 'user', text: message }]);
    
    // Get bot response using the simple NLP logic
    const botResponse = getBotResponse(message);
    setMessages((prevMessages) => [...prevMessages, { sender: 'bot', text: botResponse }]);
  };

  return (
    <div className="chatbot-container">
      <ChatWindow messages={messages} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chatbot;

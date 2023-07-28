// ChatBubble.js
import React from 'react';
import '../styles/chatbubble.css';

const ChatBubble = ({ type, content }) => {
  return (
    <div className={`chat-bubble ${type}`}>
      {content}
    </div>
  );
};

export default ChatBubble;

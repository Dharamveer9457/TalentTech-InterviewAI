// Chat.js
import React, { useState, useRef, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import "../styles/chat.css"

const Chat = () => {
  const [messages, setMessages] = useState([
    { type: 'agent', content: "Hi there! I'm your virtual assistant." },`"\\n"`
    // Add more initial messages here
  ]);
  const userMessageInputRef = useRef(null);

  const handleSendMessage = () => {
    const message = userMessageInputRef.current.value.trim();
    if (message !== '') {
      setMessages(prevMessages => [
        ...prevMessages,
        { type: 'user', content: message },
        { type: 'agent', content: `I received: ${message}` },
      ]);
      userMessageInputRef.current.value = '';
    }
  };

  useEffect(() => {
    // Scroll to the bottom of the chat container whenever messages change
    const chatContainer = document.getElementById('chat-container');
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [messages]);

  return (
    <div className="chat-container" id="chat-container">
      {messages.map((message, index) => (
          <div key={index}>
        <ChatBubble key={index} type={message.type} content={message.content} />
        </div>
      ))}
      <div className="user-input">
        <input type="text" ref={userMessageInputRef} placeholder="Type your message..." />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;

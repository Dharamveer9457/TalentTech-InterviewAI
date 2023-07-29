// Chat.js
import React, { useState, useRef, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import "../styles/chat.css"
import axios from 'axios';
import { baseUrl } from '../url';

const Chat = ({track}) => {
  const [messages, setMessages] = useState([
    { type: 'agent', content: "Hi there! let's begin the interview" },`"\\n"`
    // Add more initial messages here
  ]);
  const userMessageInputRef = useRef(null);

  const handleSendMessage = () => {
    const message = userMessageInputRef.current.value.trim();
    
    const data = {track ,prompt:message}
    console.log(track,prompt , message);
    console.log(data);
    axios.post(`${baseUrl}/chatPrompt`,data)
    .then(res=> 
         { if (message !== '') {
      setMessages(prevMessages => [
        ...prevMessages,
        { type: 'user', content: message },
        { type: 'agent', content: ` ${res.data.res}` },
      ]);
      userMessageInputRef.current.value = '';
    }}
    )
    .catch(err=>console.log(err))
    

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

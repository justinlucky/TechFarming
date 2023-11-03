import React, { useState } from 'react'
import ChatBot from 'react-chatbot-kit';
import config from './config';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import 'react-chatbot-kit/build/main.css'
import { FaComments } from 'react-icons/fa';
import './ChatBot.css';

const Chatbot = () => {
  const [showChatBot, setShowChatBot] = useState(false);

  const toggleChatbot = () => {
    setShowChatBot(!showChatBot);
  }
  return (
    <div id='chatBot'>
      <button className="chat-bot" onClick={toggleChatbot}>
        <FaComments />
      </button>
      {showChatBot && (
        <div className="chat-bot-container">
          <ChatBot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
          />
        </div>
      )}
    </div>
  )
}

export default Chatbot
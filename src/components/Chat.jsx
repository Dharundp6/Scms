// src/components/Chat.jsx
import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

const Chat = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I assist you today?", sender: "bot" }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim() !== "") {
      setMessages([...messages, { id: messages.length + 1, text: inputMessage, sender: "user" }]);
      setInputMessage("");
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prevMessages => [...prevMessages, { 
          id: prevMessages.length + 1, 
          text: "Thank you for your question. I'm here to help with any SCMS-related queries.", 
          sender: "bot" 
        }]);
      }, 1000);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h3 className="font-semibold">SCMS Assistant</h3>
        <button onClick={onClose} className="text-white hover:text-gray-200">
          <X size={20} />
        </button>
      </div>
      <div className="h-96 overflow-y-auto p-4">
        {messages.map(message => (
          <div key={message.id} className={`mb-4 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${message.sender === 'user' ? 'bg-blue-100' : 'bg-gray-100'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 border-t">
        <div className="flex">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={handleSendMessage}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
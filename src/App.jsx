// src/App.jsx
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Attendance from './components/Attendance';
import Resources from './components/Resources';
import Schedule from './components/Schedule';
import Alerts from './components/Alerts';
import Chat from './components/Chat';

const App = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 p-8 relative">
        <h2 className="text-2xl font-semibold mb-4">{activeTab}</h2>
        {activeTab === 'Dashboard' && <Dashboard />}
        {activeTab === 'Attendance' && <Attendance />}
        {activeTab === 'Resources' && <Resources />}
        {activeTab === 'Schedule' && <Schedule />}
        {activeTab === 'Alerts' && <Alerts />}
        
        <button
          onClick={() => setIsChatOpen(true)}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <MessageCircle size={24} />
        </button>
        
        <Chat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
      </div>
    </div>
  );
};

export default App;
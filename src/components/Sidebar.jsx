// src/components/Sidebar.jsx
import React from 'react';
import { BellRing, BookOpen, Calendar, Users, BarChart2 } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { name: 'Dashboard', icon: BarChart2 },
    { name: 'Attendance', icon: Users },
    { name: 'Resources', icon: BookOpen },
    { name: 'Schedule', icon: Calendar },
    { name: 'Alerts', icon: BellRing },
  ];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-8">SCMS</h1>
      <nav>
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`flex items-center space-x-2 py-2 px-4 w-full text-left ${
              activeTab === tab.name ? 'bg-gray-700' : 'hover:bg-gray-700'
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            <tab.icon className="w-5 h-5" />
            <span>{tab.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
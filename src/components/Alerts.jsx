// src/components/Alerts.jsx
import React from 'react';
import { alerts } from '../data/mockData';

const Alerts = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Active Alerts</h2>
      <ul>
        {alerts.map((alert) => (
          <li key={alert.id} className={`p-3 rounded mb-2 ${
            alert.type === 'info' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
          }`}>
            {alert.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Alerts;
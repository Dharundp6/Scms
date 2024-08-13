// src/components/Dashboard.jsx
import React from 'react';
import { students, resources, alerts } from '../data/mockData';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Total Students</h2>
        <p className="text-3xl font-bold">{students.length}</p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Attendance Rate</h2>
        <p className="text-3xl font-bold">
          {Math.round((students.filter(s => s.present).length / students.length) * 100)}%
        </p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Resource Utilization</h2>
        <p className="text-3xl font-bold">
          {Math.round((resources.filter(r => r.status === 'In Use').length / resources.length) * 100)}%
        </p>
      </div>
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-2">Active Alerts</h2>
        <p className="text-3xl font-bold">{alerts.length}</p>
      </div>
    </div>
  );
};

export default Dashboard;

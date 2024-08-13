// src/components/Schedule.jsx
import React from 'react';
import { schedule } from '../data/mockData';

const Schedule = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
      <ul>
        {schedule.map((item) => (
          <li key={item.id} className="py-2 border-b">
            <div className="font-semibold">{item.subject}</div>
            <div className="text-sm text-gray-600">{item.time}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;

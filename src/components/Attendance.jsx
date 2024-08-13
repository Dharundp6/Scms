// src/components/Attendance.jsx
import React from 'react';
import { Check, X } from 'lucide-react';
import { students } from '../data/mockData';

const Attendance = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Today's Attendance</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id} className="flex items-center justify-between py-2 border-b">
            <span>{student.name}</span>
            {student.present ? (
              <Check className="text-green-500" />
            ) : (
              <X className="text-red-500" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Attendance;
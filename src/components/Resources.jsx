// src/components/Resources.jsx
import React from 'react';
import { resources } from '../data/mockData';

const Resources = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Resource Management</h2>
      <ul>
        {resources.map((resource) => (
          <li key={resource.id} className="flex items-center justify-between py-2 border-b">
            <span>{resource.name}</span>
            <span className={`px-2 py-1 rounded text-sm ${
              resource.status === 'Available' ? 'bg-green-200 text-green-800' :
              resource.status === 'In Use' ? 'bg-yellow-200 text-yellow-800' :
              'bg-red-200 text-red-800'
            }`}>
              {resource.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resources;
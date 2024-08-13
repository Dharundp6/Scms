// src/data/mockData.js
export const students = [
    { id: 1, name: 'Alice Johnson', present: true },
    { id: 2, name: 'Bob Smith', present: false },
    { id: 3, name: 'Charlie Brown', present: true },
    { id: 4, name: 'Diana Ross', present: true },
  ];
  
  export const resources = [
    { id: 1, name: 'Projector', status: 'Available' },
    { id: 2, name: 'Laptops', status: 'In Use' },
    { id: 3, name: 'Smart Board', status: 'Maintenance' },
  ];
  
  export const schedule = [
    { id: 1, subject: 'Mathematics', time: '09:00 AM - 10:30 AM' },
    { id: 2, subject: 'Science', time: '11:00 AM - 12:30 PM' },
    { id: 3, subject: 'English', time: '02:00 PM - 03:30 PM' },
  ];
  
  export const alerts = [
    { id: 1, message: 'Fire drill scheduled for 2:00 PM', type: 'info' },
    { id: 2, message: 'Projector maintenance required', type: 'warning' },
  ];
# Smart Classroom Management System (SCMS)

## Project Overview

The Smart Classroom Management System (SCMS) is a React-based web application designed to streamline classroom operations, improve resource utilization, and enhance the overall learning experience. It provides an intuitive interface for managing various aspects of a classroom environment.

### Key Features

- Dashboard with key metrics
- Attendance tracking
- Resource management
- Class schedule viewer
- Alert system
- Integrated chat assistant

## Technology Stack

- React
- Vite.js
- Tailwind CSS
- Lucide React (for icons)

## Project Structure

```
scms-app/
├── src/
│   ├── components/
│   │   ├── Sidebar.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Attendance.jsx
│   │   ├── Resources.jsx
│   │   ├── Schedule.jsx
│   │   ├── Alerts.jsx
│   │   └── Chat.jsx
│   ├── data/
│   │   └── mockData.js
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── tailwind.config.js
```

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   cd scms-app
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up Tailwind CSS:
   ```
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

4. Update `tailwind.config.js`:
   ```javascript
   /** @type {import('tailwindcss').Config} */
   export default {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

5. Add Tailwind directives to your CSS file (e.g., `src/index.css`):
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

6. Import the CSS file in your `main.jsx`:
   ```javascript
   import './index.css'
   ```

## Running the Application

To start the development server:

```
npm run dev
```

This will start the application, typically on `http://localhost:5173`. Open this URL in your web browser to view the SCMS application.

## Building for Production

To create a production build:

```
npm run build
```

This will generate optimized files in the `dist` directory, which can be deployed to a web server.

## Contributing

Contributions to the SCMS project are welcome. Please ensure you follow the existing code style and submit pull requests for any new features or bug fixes.




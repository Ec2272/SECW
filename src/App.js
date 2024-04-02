import './App.css';
import React from 'react';
import AdminAssignDashboard from './AdminAssignDashboard/AdminAssignDashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome, Admin </h1>
        <AdminAssignDashboard />
      </header>
    </div>
  );
}

export default App;

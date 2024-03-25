import './App.css';
import React from 'react';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import ServiceStatus from './ServiceStatus/ServiceStatus';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome</h1>
        <AdminDashboard />
        <div></div>
        <ServiceStatus/>
      </header>
    </div>
  );
}

export default App;

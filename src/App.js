import './App.css';
import './Login.css'
import React from 'react';
import AdminDashboard from './AdminDashboard/AdminDashboard';
import LoginForm from "./LoginForm"

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome, Admin </h1>
        <AdminDashboard />
      </header>
    </div>
  );

}

export default App;

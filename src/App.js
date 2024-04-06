import './App.css';
import React from 'react';

import AdminDashboard from './AdminDashboard/AdminDashboard';
import './AdminDashboard/style.css';

import AdminAssignDashboard from './AssignTasks/AdminAssignDashboard';
import './AdminDashboard/style.css';

import LandingStudent from './LandingPages/LandingStudent';
import LandingFaculty from './LandingPages/LandingFaculty';
import './LandingPages/Landing.css';

import LoginForm from "./Login/LoginForm"
import './Login/Login.css'

import ECForm from './SubmitEC/ECForm';
import './SubmitEC/FormStyles.css';

import IssueForm from './SubmitIssue/IssueForm';
import './SubmitIssue/FormStyles.css';

import ServiceStatus from './ServiceStatus/ServiceStatus';
import './ServiceStatus/style.css';

function App() {

  return (

    <div className="App">
    <header className="App-header">
      <LoginForm />
    </header>
  </div>
    
  )


}

export default App;

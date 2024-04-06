import './App.css';
import React from 'react';

import AdminDashboard from './AdminDashboard/AdminDashboard';
import './AdminDashboard/style.css';

import AdminAssignDashboard from './AssignTasks/AdminAssignDashboard';
import './AdminDashboard/style.css';

import LandingStudent from './LandingPages/LandingStudent';
import LandingFaculty from './LandingPages/LandingFaculty';
import LandingAdmin from './LandingPages/LandingAdmin';
import './LandingPages/Landing.css';

import LoginForm from "./Login/LoginForm"
import './Login/Login.css'

import ECForm from './SubmitEC/ECForm';
import './SubmitEC/FormStyles.css';

import LabIssueForm from './SubmitIssue/LabIssueForm';
import './SubmitIssue/FormStyles.css';

import ServiceIssueForm from './SubmitIssue/ServiceIssueForm';
import './SubmitIssue/FormStyles.css';

import ServiceStatus from './ServiceStatus/ServiceStatus';
import './ServiceStatus/style.css';

import TrackTickets from './TrackTickets/tracktickets';
import './TrackTickets/style.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {

  return (
    

    <Router>
      <div className="App">
      <header className="App-header">

        <Switch>
          <Route exact path= "/">
            <LoginForm />
          </Route>
          <Route path="/LandingStudent">
            <LandingStudent />
          </Route>
          <Route path="/LandingFaculty">
            <LandingFaculty />
          </Route>
          <Route path="/LandingAdmin">
            <LandingAdmin />
          </Route>
          <Route path = "/ECForm">
            <ECForm />
          </Route>
          <Route path = "/ReportLab">
            <LabIssueForm />
          </Route>
          <Route path = "/ReportService">
            <ServiceIssueForm />
          </Route>
          <Route path = "/CheckService">
            <ServiceStatus />
          </Route>
          <Route path = "/TrackTicket">
            <TrackTickets />
          </Route>
          <Route path = "/AdminDashboard">
            <AdminDashboard />
          </Route>
          <Route path = "/AssignTasks">
            <AdminAssignDashboard />
          </Route>

        </Switch>
      </header>
      </div>
    </Router>
    
  )


}

export default App;

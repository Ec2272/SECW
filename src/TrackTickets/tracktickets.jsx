import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import supabase from '../Config/supabaseClient';



const App = () => {
  const [ecTickets, setEcTickets] = useState([]);
  const [labIssues, setLabIssues] = useState([]);
  const [serviceIssues, setServiceIssues] = useState([]);
  const [openFolders, setOpenFolders] = useState({
    'EC Ticket(s)': true,
    'Lab Issue(s)': true,
    'Service Issue(s)': true
  });

  const UserID = sessionStorage.getItem('userId');

  useEffect(() => {
    async function fetchData() {
      try {
        const ecTicketData = await supabase
          .from('EC_Ticket')
          .select('*').eq('UserId_E', UserID);
        if (ecTicketData.error) {
          throw ecTicketData.error;
        }
        setEcTickets(ecTicketData.data || []);

        const labIssueData = await supabase
          .from('Lab_Issue')
          .select('*').eq('UserID_L', UserID);
        if (labIssueData.error) {
          throw labIssueData.error;
        }
        setLabIssues(labIssueData.data || []);

        const serviceIssueData = await supabase
          .from('Service_Issue')
          .select('*').eq('UserId_S', UserID);
        if (serviceIssueData.error) {
          throw serviceIssueData.error;
        }
        setServiceIssues(serviceIssueData.data || []);
      } catch (error) {
        alert(error.message);
      }
    }
    fetchData();
  }, []); // Run once when component mounts

  // Toggle folder open/close
  function toggleFolder(folder) {
    setOpenFolders(prevOpenFolders => ({
      ...prevOpenFolders,
      [folder]: !prevOpenFolders[folder]
    }));
  }

  // Rendering logic for records using fetched data
  return (
    <div>
      <h1>Tracking Student Tickets</h1>
      <div>
        <h2 onClick={() => toggleFolder('EC Ticket(s)')} style={{ cursor: 'pointer' }} className='TrackTicketTitle'>
          EC Ticket(s) {openFolders['EC Ticket(s)'] ? '▼' : '▶'}
        </h2>
        {openFolders['EC Ticket(s)'] && (
          <table className="table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Module Code</th>
                <th>Assessment Type</th>
                <th>Description</th>
                <th>Supporting Evidence</th>
              </tr>
            </thead>
            <tbody>
              {ecTickets.map(record => (
                <tr key={record.TicketID}>
                  <td>{record.TicketID}</td>
                  <td>{record['Module Code']}</td>
                  <td>{record['Assessment Type']}</td>
                  <td>{record.Description}</td>
                  <td>{record['Supporting Evidence']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div>
        <h2 onClick={() => toggleFolder('Lab Issue(s)')} style={{ cursor: 'pointer' }} className='TrackTicketTitle'>
          Lab Issue(s) {openFolders['Lab Issue(s)'] ? '▼' : '▶'}
        </h2>
        {openFolders['Lab Issue(s)'] && (
          <table className="table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Module Code</th>
                <th>Floor</th>
                <th>Computer ID</th>
                <th>Application Name</th>
                <th>Computer Architecture</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {labIssues.map(record => (
                <tr key={record.TicketID}>
                  <td>{record.TicketID}</td>
                  <td>{record['Module Code']}</td>
                  <td>{record.Floor}</td>
                  <td>{record['Computer ID']}</td>
                  <td>{record['Application Name']}</td>
                  <td>{record['Computer Architecture']}</td>
                  <td>{record.Description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div>
        <h2 onClick={() => toggleFolder('Service Issue(s)')} style={{ cursor: 'pointer' }} className='TrackTicketTitle'>
          Service Issue(s) {openFolders['Service Issue(s)'] ? '▼' : '▶'}
        </h2>
        {openFolders['Service Issue(s)'] && (
          <table className="table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Service ID</th>
                <th>Service Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {serviceIssues.map(record => (
                <tr key={record.TicketID}>
                  <td>{record.TicketID}</td>
                  <td>{record['Service ID']}</td>
                  <td>{record['Service Name']}</td>
                  <td>{record.Description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;


/* OLD, cut if the new works, keep as reference
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createClient } from '@supabase/supabase-js';
import './style.css';

const supabaseUrl = 'https://brhksoramgdcntvzzfkh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyaGtzb3JhbWdkY250dnp6ZmtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MzE5NTgsImV4cCI6MjAyNjEwNzk1OH0.dJBSMd_t4dSmGq-OUQJsw3wngOAIhVaAEh9D_3GFSvE';
const supabase = createClient(supabaseUrl, supabaseKey);

const App = () => {
  const [ecTickets, setEcTickets] = useState([]);
  const [labIssues, setLabIssues] = useState([]);
  const [serviceIssues, setServiceIssues] = useState([]);
  const [openFolders, setOpenFolders] = useState({
    'EC Ticket(s)': true,
    'Lab Issue(s)': true,
    'Service Issue(s)': true
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const ecTicketData = await supabase
          .from('EC_Ticket')
          .select('*');
        if (ecTicketData.error) {
          throw ecTicketData.error;
        }
        setEcTickets(ecTicketData.data || []);

        const labIssueData = await supabase
          .from('Lab_Issue')
          .select('*');
        if (labIssueData.error) {
          throw labIssueData.error;
        }
        setLabIssues(labIssueData.data || []);

        const serviceIssueData = await supabase
          .from('Service_Issue')
          .select('*');
        if (serviceIssueData.error) {
          throw serviceIssueData.error;
        }
        setServiceIssues(serviceIssueData.data || []);
      } catch (error) {
        alert(error.message);
      }
    }
    fetchData();
  }, []); // Run once when component mounts

  // Toggle folder open/close
  function toggleFolder(folder) {
    setOpenFolders(prevOpenFolders => ({
      ...prevOpenFolders,
      [folder]: !prevOpenFolders[folder]
    }));
  }

  // Rendering logic for records using fetched data
  return (
    <div>
      <h1>Tracking Student Tickets</h1>
      <div>
        <h2 onClick={() => toggleFolder('EC Ticket(s)')} style={{ cursor: 'pointer' }} className='TrackTicketTitle'>
          EC Ticket(s) {openFolders['EC Ticket(s)'] ? '▼' : '▶'}
        </h2>
        {openFolders['EC Ticket(s)'] && (
          <table className="table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Module Code</th>
                <th>Assessment Type</th>
                <th>Description</th>
                <th>Supporting Evidence</th>
              </tr>
            </thead>
            <tbody>
              {ecTickets.map(record => (
                <tr key={record.TicketID}>
                  <td>{record.TicketID}</td>
                  <td>{record['Module Code']}</td>
                  <td>{record['Assessment Type']}</td>
                  <td>{record.Description}</td>
                  <td>{record['Supporting Evidence']}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div>
        <h2 onClick={() => toggleFolder('Lab Issue(s)')} style={{ cursor: 'pointer' }} className='TrackTicketTitle'>
          Lab Issue(s) {openFolders['Lab Issue(s)'] ? '▼' : '▶'}
        </h2>
        {openFolders['Lab Issue(s)'] && (
          <table className="table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Module Code</th>
                <th>Floor</th>
                <th>Computer ID</th>
                <th>Application Name</th>
                <th>Computer Architecture</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {labIssues.map(record => (
                <tr key={record.TicketID}>
                  <td>{record.TicketID}</td>
                  <td>{record['Module Code']}</td>
                  <td>{record.Floor}</td>
                  <td>{record['Computer ID']}</td>
                  <td>{record['Application Name']}</td>
                  <td>{record['Computer Architecture']}</td>
                  <td>{record.Description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div>
        <h2 onClick={() => toggleFolder('Service Issue(s)')} style={{ cursor: 'pointer' }} className='TrackTicketTitle'>
          Service Issue(s) {openFolders['Service Issue(s)'] ? '▼' : '▶'}
        </h2>
        {openFolders['Service Issue(s)'] && (
          <table className="table">
            <thead>
              <tr>
                <th>Ticket ID</th>
                <th>Service ID</th>
                <th>Service Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {serviceIssues.map(record => (
                <tr key={record.TicketID}>
                  <td>{record.TicketID}</td>
                  <td>{record['Service ID']}</td>
                  <td>{record['Service Name']}</td>
                  <td>{record.Description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;
*/

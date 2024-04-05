import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const App = () => {
  const [records, setRecords] = useState(generateRandomRecords());
  const [openFolders, setOpenFolders] = useState({
    'EC Ticket(s)': true,
    'Lab Issue Ticket(s)': true,
    'Service Issue Ticket(s)': true
  });

  // Generate random records
  function generateRandomRecords() {
    const randomRecords = [];
    for (let i = 0; i < 5; i++) {
      const id = Math.floor(Math.random() * 1000); // Random ID
      const description = Math.random() < 0.33 ? 'EC Ticket(s)' : Math.random() < 0.66 ? 'Lab Issue Ticket(s)' : 'Service Issue Ticket(s)';  // Random ticket type
      const moduleCode = `ECS${Math.floor(Math.random() * 10000)}`; // Random module code
      const dateTime = new Date().toLocaleString(); // Current date/time
      const status = Math.random() < 0.5 ? 'Open' : 'Closed'; // Random ticket status
      randomRecords.push({
        id,
        description,
        moduleCode,
        dateTime,
        status,
      });
    }
    return randomRecords;
  }

  // Action button click function
  function handleActionClick(recordId, action) {
    if (action === 'upload') {
      const fileInput = document.createElement('input');
      fileInput.type = 'file';
      fileInput.accept = '.doc, .docx, .pdf';
      fileInput.addEventListener('change', () => {
        const file = fileInput.files[0];
        if (file) {
          const updatedRecords = records.map(record => {
            if (record.id === recordId) {
              return { ...record, uploadedFile: file };
            }
            return record;
          });
          setRecords(updatedRecords);
        }
      });
      fileInput.click();
    } else if (action === 'delete') {
      if (window.confirm('Are you sure you want to delete this record?')) {
        const updatedRecords = records.filter(record => record.id !== recordId);
        setRecords(updatedRecords);
      }
    }
  }

  // Function to handle file deletion
  function handleDeleteFile(recordId) {
    if (window.confirm('Are you sure you want to delete this document?')) {
      const updatedRecords = records.map(record => {
        if (record.id === recordId) {
          const { uploadedFile, ...rest } = record;
          return { ...rest };
        }
        return record;
      });
      setRecords(updatedRecords);
    }
  }

  // Toggle folder open/close
  function toggleFolder(folder) {
    setOpenFolders(prevOpenFolders => ({
      ...prevOpenFolders,
      [folder]: !prevOpenFolders[folder]
    }));
  }

  const groupedRecords = {};
  records.forEach(record => {
    if (!groupedRecords[record.description]) {
      groupedRecords[record.description] = [];
    }
    groupedRecords[record.description].push(record);
  });


  
  // Rendering logic for records
  return (
    <div>
      <h1>Tracking Student Tickets</h1>
      {Object.keys(groupedRecords).map(description => (
        <div key={description}>
          <h2 onClick={() => toggleFolder(description)} style={{ cursor: 'pointer' }}>
            {description} {openFolders[description] ? '▼' : '▶'}
          </h2>
          {openFolders[description] && (
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Module Code</th>
                  <th>Date/Time</th>
                  <th>Status</th>
                  <th>Actions</th>
                  <th>Uploaded Document(s)</th>
                </tr>
              </thead>
              <tbody>
                {groupedRecords[description].map(record => (
                  <tr key={record.id}>
                    <td>{record.id}</td>
                    <td>{record.moduleCode}</td>
                    <td>{record.dateTime}</td>
                    <td>{record.status}</td>
                    <td>
                      <button className="ticket-button" onClick={() => handleActionClick(record.id, 'upload')}>Upload Doc</button>
                      <button className="close-button" onClick={() => handleActionClick(record.id, 'delete')}>Delete</button>
                    </td>
                    <td>
                      {record.uploadedFile && (
                        <div>
                          <span>{record.uploadedFile.name}</span>
                          <button className="delete-file-button" onClick={() => handleDeleteFile(record.id)}>x</button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
export default App;

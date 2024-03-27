import React, { useState } from 'react';

const App = () => {
  const [records, setRecords] = useState(generateRandomRecords());

  // Generate random records
  function generateRandomRecords() {
    const randomRecords = [];
    for (let i = 0; i < 5; i++) {
      const id = Math.floor(Math.random() * 1000); // Random ID
      const description =
        Math.random() < 0.25
          ? 'Holiday'
          : Math.random() < 0.5
          ? 'Illness'
          : Math.random() < 0.75
          ? 'Internet Problems'
          : 'Family Issue'; // Random EC description
      const moduleCode = `ECS${Math.floor(Math.random() * 10000)}`; // Random module code
      const dateTime = new Date().toLocaleString(); // Current date/time
      const status = Math.random() < 0.5 ? 'Open' : 'Closed'; // Random EC status
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
      // Upload functionality
      console.log(`Upload supporting doc for record ID: ${recordId}`);
    } else if (action === 'delete') {
      // Delete functionality
      console.log(`Delete record with ID: ${recordId}`);
      const updatedRecords = records.filter(record => record.id !== recordId);
      setRecords(updatedRecords);
    }
  }

  return (
    <div>
      <h1>Student Tracking EC Tickets</h1>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>EC Subject|Description</th>
            <th>Module Code</th>
            <th>Date/Time</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={record.id}>
              <td>{record.id}</td>
              <td>{record.description}</td>
              <td>{record.moduleCode}</td>
              <td>{record.dateTime}</td>
              <td>{record.status}</td>
              <td>
                <button onClick={() => handleActionClick(record.id, 'upload')}>
                  Upload Doc
                </button>
                <button onClick={() => handleActionClick(record.id, 'delete')}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

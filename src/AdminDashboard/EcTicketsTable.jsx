import React from 'react';
import './EcTicketsTable.css'; 

const EcTicketsTable = ({ onTicketSelect }) => {

  const tickets = [
    { ecID: 'EC123', studentID: 'S001', title: 'Extension Request', status: 'Pending' },
    { ecID: 'EC147', studentID: 'S004', title: 'Alternative Assessment', status: 'Resolved' },
  ];

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>EC ID</th>
            <th>Student ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
  {tickets.map(ticket => (
    <tr key={ticket.ecID}>
      <td>{ticket.ecID}</td>
      <td>{ticket.studentID}</td>
      <td>{ticket.title}</td>
      <td>{ticket.status}</td>
      <td>
        <button 
          className="info-button"
          onClick={() => onTicketSelect(ticket)} 
        >
          More Info
        </button>
      </td>
    </tr>
  ))}
</tbody>
      </table>
    </div>
  );
};

export default EcTicketsTable;

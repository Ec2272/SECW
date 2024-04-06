import React from 'react';
import './AdminAssign.css'; 

const EcTicketsTable = ({ onTicketSelect }) => {

  const tickets = [
    { ecID: 'EC123', studentID: 'S001', title: 'Extension Request', status: 'Resolved', assignStatus: 'Paul' },
    { ecID: 'LAB147', studentID: 'S004', title: 'Alternative Assessment', status: 'Pending', assignStatus: 'NOT ASSIGNED' },
    { ecID: 'SERV121', studentID: 'S023', title: 'QMPLUS Down', status: 'Pending', assignStatus: 'Louis' }
  ];



  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>TICKET ID</th>
            <th>Student ID</th>
            <th>Title</th>
            <th>Status</th>
            <th>AssignStatus</th>
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
      <td className={ticket.assignStatus === 'NOT ASSIGNED' ? 'not-assigned' : ''} >{ticket.assignStatus}</td>
      <td>
        <button 
          className="info-button"
          onClick={() => onTicketSelect(ticket)} 
        >
          More Info
        </button>
        <button className="assign-button"
        onClick={() => onTicketSelect(ticket)}
        >
          Assign
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

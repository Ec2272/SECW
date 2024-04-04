import React from 'react';
import './AdminAssign.css';

const AdminAssign = ({ tickets, onTicketSelect, onAssignTicket }) => {
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
          {tickets.map((ticket) => (
            <tr key={ticket.ecID}>
              <td>{ticket.ecID}</td>
              <td>{ticket.studentID}</td>
              <td>{ticket.title}</td>
              <td>{ticket.status}</td>
              <td className={ticket.assignStatus === 'NOT ASSIGNED' ? 'not-assigned' : ''}>
                {ticket.assignStatus}
              </td>
              <td>
                <button 
                  className="info-button"
                  onClick={() => onTicketSelect(ticket)}
                >
                  More Info
                </button>
                <button 
                  className="assign-button"
                  onClick={() => onAssignTicket(ticket.ecID)}
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

export default AdminAssign;




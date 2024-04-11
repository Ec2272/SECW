import React, { useState } from 'react';
import './AdminAssign.css';
import TicketModal from './TicketModal';

const AdminAssign = ({ tickets, onAssignTicket }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const handleMoreInfoClick = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>TICKET ID</th>
            <th>USER ID</th>
            {/* <th>Title</th> */}
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
              {/* <td>{ticket.title}</td> */}
              <td>{ticket.status}</td>
              <td className={ticket.assignStatus === 'Unassigned' ? 'not-assigned' : ''}>
                {ticket.assignStatus}
              </td>
              <td>
                <button className="moreinfo-button" onClick={() => handleMoreInfoClick(ticket)}>
                  More info
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
      {isModalOpen && (
        <TicketModal ticket={selectedTicket} onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default AdminAssign;

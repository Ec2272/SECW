import React, { useState } from 'react';
import './AdminAssign.css';
import TicketModal from './TicketModal';

const AdminAssign = ({ tickets, onTicketSelect, onAssignTicket }) => {
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
            <th>Username</th>
            <th>Title</th>
            <th>Status</th>
            <th>AssignStatus</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.TicketID}>
              <td>{ticket.TicketID}</td>
              <td>{ticket.student_id}</td>
              <td>{ticket.title || 'N/A'}</td>
              <td>{ticket.Status}</td>
              <td className={ticket.AssignStatus === 'NOT ASSIGNED' ? 'not-assigned' : ''}>
                {ticket.AssignStatus}
              </td>
              <td>
                <button className="moreinfo-button" onClick={() => handleMoreInfoClick(ticket)}>
                  More info
                </button>
                <button className="assign-button" onClick={() => onAssignTicket(ticket.TicketID)}>
                  Assign
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && <TicketModal ticket={selectedTicket} onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default AdminAssign;
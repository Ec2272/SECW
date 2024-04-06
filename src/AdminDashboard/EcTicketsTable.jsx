import React, { useState } from 'react';
import './EcTicketsTable.css';
import TicketModal from './TicketModal'; 

const EcTicketsTable = ({ onTicketSelect }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);

  const tickets = [
    { ecID: 'EC123', studentID: 'S001', title: 'Extension Request', status: 'Pending' },
    { ecID: 'EC147', studentID: 'S004', title: 'Alternative Assessment', status: 'Resolved' },
  ];

  const handleMoreInfoClick = (ticket) => {
    setSelectedTicket(ticket); // set the selected ticket when the button is clicked
    setIsModalOpen(true); // open the modal
  };

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
                {/* <button onClick={() => {
                  setIsModalOpen(true);
                  setSelectedTicket(ticket); // set the selected ticket when the button is clicked
                }}>More Info</button> */}
                {/* <button onClick={() => handleMoreInfoClick(ticket)}>More Info</button> */}
                <button className="info-button" onClick={() => handleMoreInfoClick(ticket)}>
                  More info for Ticket: {ticket.ecID}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && <TicketModal ticket={selectedTicket} onClose={() => setIsModalOpen(false)} />} {/* pass the selected ticket as a prop to TicketModal */}

    </div>
  );
};

export default EcTicketsTable;

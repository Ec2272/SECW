import React, { useState, useEffect } from 'react';
import './EcTicketsTable.css';
import TicketModal from './TicketModal';
import supabase from '../Config/supabaseClient';

const EcTicketsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [ecTickets, setEcTickets] = useState([]);

  useEffect(() => {
    async function fetchEcTickets() {
      try {
        const { data, error } = await supabase
          .from('EC_Ticket')
          .select('*');
        if (error) throw error;
        setEcTickets(data);
      } catch (error) {
        console.error('Error fetching EC tickets:', error.message);
      }
    }
    fetchEcTickets();
  }, []);

  const handleMoreInfoClick = (ticket) => {
    setSelectedTicket(ticket);
    setIsModalOpen(true);
  };

  const handleApproveTicket = async (ticket) => {
    try {
      const { error } = await supabase
        .from('EC_Ticket')
        .update({ ECStatus: 'Approved' })
        .eq('TicketID', ticket.TicketID);
      if (error) throw error;
      const updatedTickets = ecTickets.map((t) =>
        t.TicketID === ticket.TicketID ? { ...t, ECStatus: 'Approved' } : t
      );
      setEcTickets(updatedTickets);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error approving ticket:', error.message);
    }
  };

  const handleDisapproveTicket = async (ticket) => {
    try {
      const { error } = await supabase
        .from('EC_Ticket')
        .update({ ECStatus: 'Disapproved' })
        .eq('TicketID', ticket.TicketID);
      if (error) throw error;
      const updatedTickets = ecTickets.map((t) =>
        t.TicketID === ticket.TicketID ? { ...t, ECStatus: 'Disapproved' } : t
      );
      setEcTickets(updatedTickets);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error disapproving ticket:', error.message);
    }
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
          {/* TicketID, Description, StudentID, Status, Actions */}
            <th>Ticket ID</th>
            {/* <th>Module Code</th> */}
            {/* <th>Assessment Type</th> */}
            <th>Description</th>
            {/* <th>Supporting Evidence</th> */}
            <th>Student ID</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {ecTickets.map((ticket) => (
            <tr key={ticket.TicketID}>
              <td>{ticket.TicketID}</td>
              {/* <td>{ticket['Module Code']}</td>
              <td>{ticket['Assessment Type']}</td> */}
              <td>{ticket.Description}</td>
              {/* <td>{ticket['Supporting Evidence']}</td> */}
              <td>{ticket.UserId_E}</td>
              <td>{ticket.ECStatus}</td>
              <td>
                <button className="info-button" onClick={() => handleMoreInfoClick(ticket)}>
                  More info for EC{ticket.TicketID}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isModalOpen && (
        <TicketModal
          ticket={selectedTicket}
          onClose={() => setIsModalOpen(false)}
          onApprove={handleApproveTicket}
          onDisapprove={handleDisapproveTicket}
        />
      )}
    </div>
  );
};

export default EcTicketsTable;
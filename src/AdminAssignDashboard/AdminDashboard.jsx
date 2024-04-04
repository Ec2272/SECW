import React, { useState } from 'react';
import AdminAssignDashboard from './AdminAssignDashboard'; 
import TicketModal from './TicketModal'; 

const AdminDashboard = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  
  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket);
  };

  const handleCloseModal = () => {
    setSelectedTicket(null);
  };

  return (
    <div>
      <AdminAssignDashboard onTicketSelect={handleTicketSelect} />
      {selectedTicket && <TicketModal ticket={selectedTicket} onClose={handleCloseModal} />}
    </div>
  );
};

export default AdminDashboard;

import React, { useState } from 'react';
import AdminAssign from './AdminAssign';
import AssignToAdminModal from './AssignToAdminModal'; 

const AdminAssignDashboard = () => {
  // Initialize tickets with an empty array
  const [tickets, setTickets] = useState([]);

  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  
  const [currentTicketIdForAssignment, setCurrentTicketIdForAssignment] = useState(null);

  // List of admins remains unchanged
  const adminList = ['Admin A', 'Admin B', 'Admin C'];

  // The rest of the code remains unchanged
  const handleAssignTicket = (ecID) => {
    setCurrentTicketIdForAssignment(ecID);
    setIsAssignModalOpen(true);
  };

  const handleAdminAssignment = (ticketId, adminName) => {
    setTickets(tickets.map(ticket => 
      ticket.ecID === ticketId ? { ...ticket, assignStatus: adminName } : ticket
    ));
    setIsAssignModalOpen(false);
  };

  return (
    <>
      <AdminAssign 
        tickets={tickets} 
        onAssignTicket={handleAssignTicket} 
      />
      {isAssignModalOpen && (
        <AssignToAdminModal
          isOpen={isAssignModalOpen}
          admins={adminList}
          onAssign={handleAdminAssignment}
          onClose={() => setIsAssignModalOpen(false)}
          ticketId={currentTicketIdForAssignment}
        />
      )}
    </>
  );
};

export default AdminAssignDashboard;

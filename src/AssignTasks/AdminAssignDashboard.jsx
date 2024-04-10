import React, { useState } from 'react';
import AdminAssign from './AdminAssign';
import AssignToAdminModal from './AssignToAdminModal'; 

const AdminAssignDashboard = () => {
  const [tickets, setTickets] = useState([
    { ecID: 'EC123', studentID: 'S001', title: 'Extension Request', status: 'Resolved', assignStatus: 'Paul' },
    { ecID: 'LAB147', studentID: 'S004', title: 'Alternative Assessment', status: 'Pending', assignStatus: 'NOT ASSIGNED' },
    { ecID: 'SERV121', studentID: 'S023', title: 'QMPLUS Down', status: 'Pending', assignStatus: 'Louis' }
  ]);

  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  
  const [currentTicketIdForAssignment, setCurrentTicketIdForAssignment] = useState(null);

 
  const adminList = ['Admin A', 'Admin B', 'Admin C'];

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

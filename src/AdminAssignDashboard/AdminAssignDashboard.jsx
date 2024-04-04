import React, { useState } from 'react';
import AdminAssign from './AdminAssign'; 

const AdminAssignDashboard = ({ onTicketSelect }) => {
  const [tickets, setTickets] = useState([
    { ecID: 'EC123', studentID: 'S001', title: 'Extension Request', status: 'Resolved', assignStatus: 'Paul' },
    { ecID: 'LAB147', studentID: 'S004', title: 'Alternative Assessment', status: 'Pending', assignStatus: 'NOT ASSIGNED' },
    { ecID: 'SERV121', studentID: 'S023', title: 'QMPLUS Down', status: 'Pending', assignStatus: 'Louis' }
  ]);

  const handleAssignTicket = (ecID) => {
    setTickets(tickets.map(ticket => 
      ticket.ecID === ecID ? { ...ticket, assignStatus: 'Assigned to Admin' } : ticket
    ));
  };

  return (
    <AdminAssign 
      tickets={tickets} 
      onTicketSelect={onTicketSelect} 
      onAssignTicket={handleAssignTicket} 
    />
  );
};

export default AdminAssignDashboard;


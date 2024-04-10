import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import AdminAssign from './AdminAssign';

const supabaseUrl = 'https://brhksoramgdcntvzzfkh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJyaGtzb3JhbWdkY250dnp6ZmtoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA1MzE5NTgsImV4cCI6MjAyNjEwNzk1OH0.dJBSMd_t4dSmGq-OUQJsw3wngOAIhVaAEh9D_3GFSvE';
const supabase = createClient(supabaseUrl, supabaseKey);

async function fetchDataFromTables() {
  try {
    const [serviceIssueResponse, labIssueResponse] = await Promise.all([
      supabase.from('Service_Issue').select('*'),
      supabase.from('Lab_Issue').select('*'),
    ]);

    if (serviceIssueResponse.error || labIssueResponse.error) {
      throw new Error('Error fetching data from tables.');
    }

    return {
      serviceIssues: serviceIssueResponse.data,
      labIssues: labIssueResponse.data,
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return { serviceIssues: [], labIssues: [] };
  }
}

const AdminAssignDashboard = ({ onTicketSelect }) => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicket, setSelectedTicket] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { serviceIssues, labIssues } = await fetchDataFromTables();
      setTickets([...serviceIssues, ...labIssues]);
    };
    fetchData();
  }, []); 

  const handleTicketSelect = (ticket) => {
    setSelectedTicket(ticket);
    onTicketSelect(ticket);
  };

  const handleCloseModal = () => {
    setSelectedTicket(null);
  };

  const handleAssignTicket = (ecID) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.ecID === ecID ? { ...ticket, assignStatus: 'Assigned to Admin' } : ticket
      )
    );
  };

  return (
    <AdminAssign
      tickets={tickets}
      onTicketSelect={handleTicketSelect}
      onAssignTicket={handleAssignTicket}
    />
  );
};

export default AdminAssignDashboard;
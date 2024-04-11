import React, { useEffect, useState } from 'react';
import supabase from '../Config/supabaseClient';
import AdminAssign from './AdminAssign';
import AssignToAdminModal from './AssignToAdminModal';

const AdminAssignDashboard = () => {
  const [tickets, setTickets] = useState([]);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [currentTicketIdForAssignment, setCurrentTicketIdForAssignment] = useState(null);
  const [adminList, setAdminList] = useState([]);

  useEffect(() => {
    async function fetchTickets() {
      try {
        const { data: labIssues, error: labIssuesError } = await supabase
          .from('Lab_Issue')
          .select('TicketID, "Module Code", Floor, "Computer ID", "Computer Architecture", Description, AssignStatus, Status, UserID_L');
        const { data: serviceIssues, error: serviceIssuesError } = await supabase
          .from('Service_Issue')
          .select('TicketID, "Service Name", Description, AssignStatus, FacultyID, Status, UserId_S');
        const { data: supportStaff, error: supportStaffError } = await supabase
          .from('Users')
          .select('Username')
          .eq('Roles', 'Support Staff');

        if (labIssuesError || serviceIssuesError || supportStaffError) {
          throw new Error('Error fetching data');
        }

        // Extract usernames from the fetched supporting staff data
        const usernames = supportStaff.map(user => user.Username);

        // Update the adminList with the extracted usernames
        setAdminList(usernames);

        const allTickets = [
          ...labIssues.map((issue) => ({
            ecID: issue.TicketID,
            moduleCode: issue["Module Code"],
            floor: issue.Floor,
            computerID: issue["Computer ID"],
            computerArch: issue["Computer Architecture"],
            description: issue.Description,
            assignStatus: issue.AssignStatus,
            status: issue.Status,
            studentID: issue.UserID_L,
          })),
          ...serviceIssues.map((issue) => ({
            ecID: issue.TicketID,
            serviceName: issue["Service Name"],
            description: issue.Description,
            assignStatus: issue.AssignStatus,
            facultyID: issue.FacultyID,
            status: issue.Status,
            studentID: issue.UserId_S,
          })),
        ];
        setTickets(allTickets);
      } catch (error) {
        console.error('Error fetching tickets:', error.message);
      }
    }
    fetchTickets();
  }, []);

  const handleAssignTicket = (ecID) => {
    setCurrentTicketIdForAssignment(ecID);
    setIsAssignModalOpen(true);
  };

  const handleAdminAssignment = (ticketId, adminName) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.ecID === ticketId ? { ...ticket, assignStatus: adminName } : ticket
      )
    );
    setIsAssignModalOpen(false);
  };

  return (
    <>
      <AdminAssign tickets={tickets} onAssignTicket={handleAssignTicket} />
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

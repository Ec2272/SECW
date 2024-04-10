// AssignToAdminModal.jsx
import React from 'react';
import './style.css';
 // Assuming you have a generic stylesheet for modals

const AssignToAdminModal = ({ isOpen, admins, onAssign, onClose, ticketId }) => {
  if (!isOpen) {
    return null;
  }

  const handleAdminClick = (adminName) => {
    onAssign(ticketId, adminName);
    onClose();
  };

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <button type='button' onClick={onClose} className='exit-button'>
          X
        </button>
        <h2>Assign Ticket to Admin</h2>
        <ul className='admin-list'>
          {admins.map((admin, index) => (
            <li key={index} className='admin-item'>
              <button
                type='button'
                onClick={() => handleAdminClick(admin)}
                className='admin-button'
              >
                {admin}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AssignToAdminModal;

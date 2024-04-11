import './style.css';
import { useState } from 'react';

const TicketModal = ({ ticket, onClose }) => {
  return (
    <>
      {ticket && (
        <div className="modal-overlay">
          <div className="modal">
            <button type="button" onClick={onClose} className="exit-button">
              X
            </button>
            <div className="modal-content">
              <h2>Ticket Details</h2>
              <div className="details">
                <p>
                  <strong>Ticket ID:</strong> {ticket.ecID}
                </p>
                <p>
                  <strong>Student ID:</strong> {ticket.studentID}
                </p>
                {/* <p>
                  <strong>Title:</strong> {ticket.title}
                </p> */}
                <p>
                  <strong>Status:</strong> {ticket.status}
                </p>
                <p>
                  <strong>Description:</strong> {ticket.description}
                </p>
                <p>
                  <strong>Supporting Documentation:</strong> {ticket.supportingDocumentation}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketModal;

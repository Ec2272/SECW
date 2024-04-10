import './style.css';
import { useState } from 'react';

const TicketModal = ({ ticket, onClose, onApprove, onDisapprove }) => {
  return (
    <>
      {ticket && (
        <div className="modal-overlay">
          <div className="modal">
            <button type="button" onClick={onClose} className="exit-button">
              X
            </button>
            <div className="modal-content">
              <h2 className="ECModalTitle">EC Application Details</h2>
              <div className="details">
                <p>
                  <strong>Ticket ID:</strong> {ticket.TicketID_E}
                </p>
                <p>
                  <strong>Student ID:</strong> {ticket.UserId_E}
                </p>
                <p>
                  <strong>Status:</strong> {ticket.ECStatus}
                </p>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  onClick={() => onApprove(ticket)}
                  className="approve-button"
                >
                  Approve
                </button>
                <button
                  type="button"
                  onClick={() => onDisapprove(ticket)}
                  className="disapprove-button"
                >
                  Disapprove
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketModal;
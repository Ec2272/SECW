import './style.css';
import { useState } from 'react';

const TicketModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  //This is jst some dummy data for proof of concept. change later
  const dummyData = {
    ecID: '00000000',
    date: '2024-03-19',
    time: '16:00',
    moduleCode: 'ECS506U',
    assessmentType: 'Coursework Assignment',
    description: 'Request for extension due totechnical difficulties',
    supportingDocumentation: 'evidence_screenshot.pdf',
  };

  return (
    <>
      <button onClick={toggleModal} className='ticket-button'>
        View Details for Ticket: 00000000
      </button>

      {showModal && (
        <div className='modal-overlay'>
          <div className='modal'>
            <button type='button' onClick={toggleModal} className='exit-button'>
                X
            </button>
            <div className='modal-content'>
              <h2>EC Application Details</h2>
              <div className='details'>
                <p><strong>EC ID Number:</strong> {dummyData.ecID}</p>
                <p><strong>Date submitted:</strong> {dummyData.date}</p>
                <p><strong>Time submitted:</strong> {dummyData.time}</p>
                <p><strong>Module Code:</strong> {dummyData.moduleCode}</p>
                <p><strong>Assessment Type:</strong> {dummyData.assessmentType}</p>
                <p><strong>Description:</strong> {dummyData.description}</p>
                <p><strong>Supporting Documentation:</strong> {dummyData.supportingDocumentation}</p>
              </div>
              <div className='buttons'>
                <button type='button' onClick={toggleModal} className='approve-button'>
                  Approve
                </button>
                <button type='button' onClick={toggleModal} className='disapprove-button'>
                  Disapprove
                </button>
                {/* Additional buttons for admin actions can be added here */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketModal;
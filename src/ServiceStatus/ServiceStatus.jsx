import './style.css';
import { useState } from 'react';

const TicketModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const services = [
    { name: 'QMPlus', status: 'Good service' },
    { name: 'Q-Review', status: 'Partial service' },
    { name: 'Outlook', status: 'No service' },
    { name: 'QM GitHub', status: 'Good service' },
    { name: 'JupyterHub', status: 'Partial service' },
  ];

  return (
    <>
      <button onClick={toggleModal} className='ticket-button'>
        Check Services
      </button>

      {showModal && (
        <div className='modal-overlay'>
          <div className='modal'>
            <button type='button' onClick={toggleModal} className='exit-button'>
              X
            </button>
            <div className='modal-content'>
              <h2>Service Status</h2>
              <div className='service-list'>
                {services.map((service, index) => (
                  <div key={index} className='service-item'>
                    <p className='service-name'>{service.name}</p>
                    <p className='service-status'>{service.status}</p>
                  </div>
                ))}
              </div>
              {/* Additional content or buttons can be added here */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TicketModal;

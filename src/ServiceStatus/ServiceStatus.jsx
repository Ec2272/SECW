import './style.css';
import { useState } from 'react';

const TicketModal = () => {
    const [showServiceModal, setShowServiceModal] = useState(false);
    const [showMaintenanceModal, setShowMaintenanceModal] = useState(false);
    const [showInterruptionsModal, setShowInterruptionsModal] = useState(false);

    const toggleServiceModal = () => {
      setShowServiceModal(!showServiceModal);
    };
  
    const toggleMaintenanceModal = () => {
      setShowMaintenanceModal(!showMaintenanceModal);
    };
  
    const toggleInterruptionsModal = () => {
      setShowInterruptionsModal(!showInterruptionsModal);
    };

    const services = [
    { name: 'QMPlus', status: 'Good service' },
    { name: 'Q-Review', status: 'Partial service' },
    { name: 'Outlook', status: 'No service' },
    { name: 'QM GitHub', status: 'Good service' },
    { name: 'JupyterHub', status: 'Partial service' },
  ];

  const maintenance = [
    { name: 'QMPlus', status: 'Scheduled maintenance' },
    { name: 'Q-Review', status: 'Scheduled maintenance' },
    { name: 'Outlook', status: 'Scheduled maintenance' },
    { name: 'QM GitHub', status: 'Scheduled maintenance' },
    { name: 'JupyterHub', status: 'Scheduled maintenance' },
    ]

    const interruptions = [
    { name: 'QMPlus', status: 'Resolved' },
    { name: 'Q-Review', status: 'Resolved' },
    { name: 'Outlook', status: 'Resolved' },
    { name: 'QM GitHub', status: 'Resolved' },
    { name: 'JupyterHub', status: 'Resolved' },
    ]

  return (
    <>
      <button onClick={toggleServiceModal} className='ticket-button'>
        Check Status of Current Services
      </button>

      <button onClick={toggleMaintenanceModal} className='ticket-button'>
        Future Scheduled Maintenance
      </button>

      <button onClick={toggleInterruptionsModal} className='ticket-button'>
        Past Resolved Interruptions
      </button>

      {showServiceModal && (
        <div className='modal-overlay'>
          <div className='modal'>
            <button type='button' onClick={toggleServiceModal} className='exit-button'>
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

      {showMaintenanceModal && (
        <div className='modal-overlay'>
        <div className='modal'>
          <button type='button' onClick={toggleMaintenanceModal} className='exit-button'>
            X
          </button>
          <div className='modal-content'>
            <h2>Scheduled Downtime for Future Maintenance</h2>
            <div className='service-list'>
              {maintenance.map((maintenance, index) => (
                <div key={index} className='service-item'>
                  <p className='service-name'>{maintenance.name}</p>
                  <p className='service-status'>{maintenance.status}</p>
                </div>
              ))}
            </div>
            {/* Additional content or buttons can be added here */}
          </div>
        </div>
      </div>
      )}

      {showInterruptionsModal && (
        <div className='modal-overlay'>
        <div className='modal'>
          <button type='button' onClick={toggleInterruptionsModal} className='exit-button'>
            X
          </button>
          <div className='modal-content'>
            <h2>Previously Resolved Service Interruptions</h2>
            <div className='service-list'>
              {interruptions.map((interuptions, index) => (
                <div key={index} className='service-item'>
                  <p className='service-name'>{interruptions.name}</p>
                  <p className='service-status'>{interruptions.status}</p>
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
}

export default TicketModal;

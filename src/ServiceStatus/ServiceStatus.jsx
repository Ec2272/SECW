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

    const statusToClassName = (status) => {
      if (status === 'Good Service') return 'service-goodService';
      if (status === 'Partial Service') return 'service-partialService';
      if (status === 'No Service') return 'service-noService';
      return '';
    };

    const services = [
    { name: 'QMPlus', status: 'Good Service' },
    { name: 'Q-Review', status: 'Partial Service' },
    { name: 'Outlook', status: 'Good Service' },
    { name: 'QM GitHub', status: 'Partial Service' },
    { name: 'JupyterHub', status: 'No Service' },
  ];

  const maintenance = [
    { date: 'Saturday 13th April 2024' , name: 'QMPlus', description: 'Scheduled maintenance, service will be unavailbe from 21:00 - 23:00' },
    { date: 'Monday 15th April 2024' , name: 'Q-Review', description: 'Scheduled maintenance, expect service to be down for duration of the day' },
    { date: 'Saturday 18th April 2024' , name: 'QM GitHub', description: 'Scheduled maintenance, from 00:00 - 04:00, service will be availabe, but slower than usual' },
    { date: 'Saturday 20th April 2024' , name: 'QMPlus', description: 'Scheduled maintenance, service will be unavailbe from 21:00 - 23:00' },
    ]

    const interruptions = [
      { 
        name: 'JupyterHub', 
        status: 'Resolved', 
        date: 'Saturday 30th March 2024', 
        time: '12:00 - 17:00', 
        summary: 'ECS529U Students reported inability to access notebooks'
      },
      { 
        name: 'QM GitHub', 
        status: 'Resolved', 
        date: 'Friday 29th March 2024', 
        time: '10:00 - 15:00', 
        summary: 'Students reported inability to access their repositories'
      },
      { 
        name: 'Outlook', 
        status: 'Resolved', 
        date: 'Monday 25th March 2024', 
        time: '14:00 - 18:00', 
        summary: 'Many EECS Students reported being suddenly signed out of their accounts'
      },
      { 
        name: 'Q-Review', 
        status: 'Resolved', 
        date: 'Sunday 24th March 2024', 
        time: '09:00 - 13:00', 
        summary: 'Recordings were not being uploaded, available to Faculty members only'
      },
      { 
        name: 'QMPlus', 
        status: 'Resolved', 
        date: 'Tuesday 19th March 2024', 
        time: '16:00 - 21:00', 
        summary: 'Students reported inability to sign in properly'
      },
    ]

  return (
    <>
    <h1>Check Services</h1>
      <button onClick={toggleServiceModal} className='services-button'>
        Check Status of Current Services
      </button>

      <button onClick={toggleMaintenanceModal} className='services-button'>
        Future Scheduled Maintenance
      </button>

      <button onClick={toggleInterruptionsModal} className='services-button'>
        Past Resolved Interruptions
      </button>

      {showServiceModal && (
        <div className='modal-overlay'>
          <div className='modal'>
            <button type='button' onClick={toggleServiceModal} className='exit-button'>
              X
            </button>
            <div className='modal-content'>
              <h2 className = 'ECModalTitle'>Service Status</h2>
              <div className='service-list'>
                {services.map((service, index) => (
                  <div key={index} className='service-item'>
                    <p className='service-name'>{service.name}:</p>
                    <p className={`service-status ${statusToClassName(service.status)}`}>
                {service.status}
              </p>
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
            <h2 className = 'ECModalTitle'>Scheduled Downtime for Future Maintenance</h2>
            <div className='service-list'>
              {maintenance.map((maintenance, index) => (
                <div key={index} className='service-item'>
                  <p className='service-name'>{maintenance.date}</p>
                  <p></p>
                  <p className='service-status'><strong>Service: </strong>{maintenance.name}</p>
                  <p></p>
                  <p className='service-status'><strong>Notes: </strong>{maintenance.description}</p>
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
            <h2 className = 'ECModalTitle'>Previously Resolved Service Interruptions</h2>
            <div className='service-list'>
              {interruptions.map((interruptions, index) => (
                <div key={index} className='service-item'>
                  <p className='service-name'>{interruptions.name}</p>
                  <p></p>
                  <p className='service-status'><strong>Issue: </strong>{interruptions.summary}</p>
                  <p></p>
                  <p className='service-status'><strong>Status:</strong></p><p className='service-resolved'>{interruptions.status}</p>
                  <p></p>
                  <p className='service-status'>Service was unavalable on {interruptions.date}</p>
                  <p className='service-status'>from {interruptions.time}</p>
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

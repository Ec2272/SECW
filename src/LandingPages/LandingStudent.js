import React from 'react';
import './Landing.css';




function App(){

    const redirectToECForm = () => {
        window.location.href = "/ECForm";
    }
    
    const redirectToTrackTicket = () => {
        window.location.href = "/TrackTicket";
    }

    const redirectToReportLab = () => {
        window.location.href = "/ReportLab";
    }

    const redirectToReportService = () => {
        window.location.href = "/ReportService";
    }

    const redirectToCheckService = () => {
        window.location.href = "/CheckService";
    }



    return( 
    <body>
        <div className="App">
            <h1> QMUL Student Landing </h1>

            <button type = 'button' onClick={redirectToECForm} variant='contained' className='submitECs'>
                Submit ECs
                
            </button>

            <button type = 'button' onClick={redirectToTrackTicket} variant='contained' className='trackTicket'>
                Track Tickets
            </button>
 
            <button type = 'button' onClick={redirectToReportLab} variant='contained' className='reportLab'>
                Report A Lab Issue
            </button>
        
            <button type = 'button' onClick={redirectToReportService} variant='contained' className='reportService'>
                Report A Service Issue
            </button>

            <button type = 'button' onClick={redirectToCheckService} variant='contained' className='checkService'>
                Check Service Status
            </button>
            
        </div>
    </body>
    )

  }

  export default App;
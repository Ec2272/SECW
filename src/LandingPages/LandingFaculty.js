import React, { Component } from 'react';
import './Landing.css';


class App extends Component {



    render(){

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
                <h1> QMUL Faculty Landing </h1>


                <button type = 'button' onClick={redirectToTrackTicket} variant='contained' className='trackTicket'>
                    Track Tickets 
                </button>

                <button type = 'button' onClick={redirectToReportLab} variant='contained' className='reportService'>
                    Report A Lab Issue
                </button>

                <button type = 'button' onClick={redirectToReportService} variant='contained' className='reportLab'>
                    Report A Service Issue
                </button>

                <button type = 'button' onClick={redirectToCheckService} variant='contained' className='checkService'>
                    Check Service Status
                </button>
            
            </div>
        </body>
      )
    }
  }

  export default App
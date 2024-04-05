import React from 'react';
import './Landing.css';




function App(){
    return( 
    <body>
        <div className="App">
            <h1> QMUL Student Landing </h1>

            <button type = 'button' variant='contained' className='submitECs'>
                Submit ECs
            </button>

            <button variant='contained' className='trackTicket'>
                Track Tickets
            </button>
 
            <button variant='contained' className='reportLab'>
                <a href="/IssueForms/IssueForm">Report A Lab Issue</a>
            </button>
        
            <button variant='contained' className='reportService'>
                Report A Service Issue
            </button>

            <button variant='contained' className='checkService'>
                Check Service Status
            </button>
            
        </div>
    </body>
    )

  }

  export default App;
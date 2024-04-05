import React, { Component } from 'react';
import './Landing.css';


class App extends Component {
    render(){
      return(
        <body>
            <div className="App">
                <h1> QMUL Faculty Landing </h1>


                <button variant='contained' className='trackTicket'>
                    Track Tickets 4
                </button>

                <button variant='contained' className='reportService'>
                    Report A Lab Issue
                </button>

                <button variant='contained' className='reportLab'>
                    Report A Service Issue
                </button>

                <button variant='contained' className='checkService'>
                    Check Service Status
                </button>
            
            </div>
        </body>
      )
    }
  }

  export default App
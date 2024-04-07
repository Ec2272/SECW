import React, { Component } from 'react';
import './Landing.css';


class App extends Component {
    render(){

      const redirectToAdminDashboard = () => {
        window.location.href = "/AdminDashboard";
      }
    
      const redirectToAssginTasks = () => {

        window.location.href = "/AssignTasks";
      }

      return(
        <body>
            <div className="App">
                <h1> QMUL Admin Landing </h1>


                <button type = 'button' onClick={redirectToAdminDashboard} variant='contained' class ='ECDashboard'>
                    EC Dashboard
                </button>

                <button type = 'button' onClick={redirectToAssginTasks} variant='contained' class ="IssueDashboard">
                    Issues Dashboard
                </button>
            
            </div>
        </body>
      )
    }
  }

  export default App
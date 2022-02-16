import React from 'react';
import { logout, useAuth } from '../firebase';
import { useHistory } from 'react-router-dom';
import './DashBoard.css'
import NavBarDashboard from '../components/NavBarDashboard';

const DashBoard = () => {
  // the result of the macro analysis
  const investment = false

  const whyInvesment = 'A lot a geopolitics problems, and the centrals could take action to fight Inflation! Dont invest in crypto!'

  const currentUser = useAuth()
  let history = useHistory()

  const handleLogOut = async() => {
    try{
        await logout()
        history.push("/home")
    } catch{
        alert("Error")
    }
  }

  return(
      <div>
        <NavBarDashboard handleLogOut={handleLogOut} name={currentUser?.email}/>
        <div className='DashBoardDiv'>
          <h1>Analysis</h1>
          <div>
            <h3>Environment Analysis:</h3>
            {
              investment ?
              <div className='AnalysisDiv' id="AnalysisDivGreen">
                <h3>GREEN</h3>
              </div>
              :
              <div className='AnalysisDiv'>
                <h3>RED</h3>
              </div>
            }
          </div>
          <div className='envirmentanalysis'>
            <p><b>Why: </b>{whyInvesment}</p>
          </div>
        </div>
      </div>
  )
};

export default DashBoard;

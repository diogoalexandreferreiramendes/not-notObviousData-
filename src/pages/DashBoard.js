import { async } from '@firebase/util';
import React, { useState } from 'react';
import { logout, useAuth } from '../firebase';
import { useHistory } from 'react-router-dom';

const DashBoard = () => {

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
        <h1>This is the Dashboard</h1>
        <p>Current user is  {currentUser?.email}</p>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
  )
};

export default DashBoard;

import React from 'react'
import {Link} from "react-router-dom"

const NavBarDashboard = (props) => {

  const name = String(props.name)

  return (
    <div>
        <div className="navbarDiv">
                    <div className="titleLeft">
                        <li><h1 id="titleNod">nod</h1></li>
                    </div>
                    <div className="titleRight">
                        <li style={{color: 'white'}}>{props.name}</li>
                        <li><Link to="#"onClick={() => props.handleLogOut()}>log out</Link></li>
                    </div>
        </div>
    </div>
  )
}

export default NavBarDashboard
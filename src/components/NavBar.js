import React from 'react'
import './NavBar.css'
import {Link} from "react-router-dom"

// things to do, make a search


export const NavBar = () => {
    return (
        <div>
            <div className="navbarDiv">
                    <div className="titleLeft">
                        <li><Link to="/home"><h1 id="titleNod">nod</h1></Link></li>
                        <li><Link to="/analysis">analysis</Link></li>
                    </div>
                    <div className="titleRight">
                        <li><Link to="/loginpage">login</Link></li>
                        <li><Link to="/signup">sign up</Link></li>
                    </div>
            </div>
        </div>
    )
}

import React from 'react'
import { NavBar } from '../components/NavBar'
import { Footer } from '../components/Footer'
import './AnalysisPage.css'
import { useHistory } from "react-router-dom";
import TopBar from '../components/TopBar'


const AnalysisPage = () => {

    let history = useHistory()

    const redirect = () => {
        history.push("/loginpage")
    }

    return (
        <div>
            <TopBar />
            <NavBar />
                <div className="maindivAnalyis">
                    <div className="analyisForm">
                        <button onClick={redirect} className="buttonAnalyis">Login</button>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default AnalysisPage

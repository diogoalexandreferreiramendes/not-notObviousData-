import React from 'react'
import './Intro.css'
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle }  from '@fortawesome/free-solid-svg-icons';

const Intro = () => {
    let history = useHistory();

    const redirect = () => {
        history.push("/home")
    }

    return (
        <div className="mainIntro">
            <div className="introPage">
                <h1>Welcome to the not obvious data</h1>
                <p> The webapp about Crypto Data </p>
                <p>  <FontAwesomeIcon icon={faExclamationTriangle}/> BE CAREFUL THIS IS NOT FINANCIAL ADVICE <FontAwesomeIcon icon={faExclamationTriangle}/></p>
                <button onClick={redirect}>Click me</button>
            </div>
        </div>
    )
}

export default Intro

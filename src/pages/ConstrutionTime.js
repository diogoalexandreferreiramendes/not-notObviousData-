import React from 'react';
import './ConstrutionTime.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle }  from '@fortawesome/free-solid-svg-icons';

const ConstrutionTime = () => {

    return (
        <div className="mainIntro_Constrution">
            <div className="introPage_Constrution">
                <h1>Welcome to the not obvious data</h1>
                <p>  <FontAwesomeIcon icon={faExclamationTriangle}/> BE CAREFUL THIS IS NOT FINANCIAL ADVICE <FontAwesomeIcon icon={faExclamationTriangle}/></p>
                <p>WE ARE CONSTRUCTING nod, THANK YOU AND HAVE A NICE DAY</p>
            </div>
        </div>
    )
}

export default ConstrutionTime

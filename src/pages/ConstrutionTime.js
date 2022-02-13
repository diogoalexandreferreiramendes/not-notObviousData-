import React from 'react';
import './ConstrutionTime.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle }  from '@fortawesome/free-solid-svg-icons';

const ConstrutionTime = () => {

    return (
        <div className="mainIntro_Constrution">
            <div className="introPage_Constrution">
                <h1>Welcome to the not obvious data</h1>
                <p><FontAwesomeIcon icon={faExclamationTriangle}/> WE ARE CONSTRUCTING nod, THANK YOU AND HAVE A NICE DAY</p> <FontAwesomeIcon icon={faExclamationTriangle}/>
                <p> Try in the Desktop </p>
            </div>
        </div>
    )
}

export default ConstrutionTime

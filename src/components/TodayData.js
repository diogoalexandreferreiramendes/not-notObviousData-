import React from 'react'
import './TodayData.css'
import imageBackground from '../images/imageBackground.jpg'

export const TodayData = () => {
    return (
        <div>
            <div>
                <h1 id="todayDatatitle">Today's Data</h1>
            </div>
            <div className="todayDataLayout">
                <div id="todayDataFirst">
                    <h3>Latest News</h3>
                    <img src={imageBackground} alt="imageBackground" width="75%"/>
                </div>
                <div id="todayDataMiddle">
                    <h3>Watch the graph</h3>
                    <img src={imageBackground} alt="imageBackground" width="75%"/>
                </div>
                <div id="todayDataLast">
                    <h3> Look the trend </h3>
                    <img src={imageBackground} alt="imageBackground" width="75%"/>
                </div>
            </div>
        </div>
    )
}

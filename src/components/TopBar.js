import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './TopBar.css'

const TopBar = (props) => {
    const [currentPrice, setCurrentPrice] = useState([])
    const [name, setName] = useState([])  
    const getData = []
    
    useEffect(
        () => {
            if((props.data.length) === 0){
                return
            }else{
                dataConcat()
            }
        },[props.data],

    )

    const dataConcat = () => {
        getData.push(...props.data)
        for(let i = 0; i < 10; i++){
            setName(name => [...name, getData[i].name])
            setCurrentPrice(currentPrice => [...currentPrice, getData[i].current_price])
        }
    }

    return (
        <div>
            <div className="topnavbardiv">
                <ul>
                    <li className="topNavBarData">{name[0]} : {currentPrice[0]}</li>
                    <li className="topNavBarData">{name[1]} :{currentPrice[1]}</li>
                    <li className="topNavBarData">{name[2]} : {currentPrice[2]}</li>
                    <li className="topNavBarData">{name[3]} : {currentPrice[3]}</li>
                    <li className="topNavBarData">{name[4]} : {currentPrice[4]}</li>
                    <li className="topNavBarData">{name[5]} : {currentPrice[5]}</li>
                    <li className="topNavBarData">{name[6]} : {currentPrice[6]}</li>
                    <li id="topLastNavBarData">{name[7]} : {currentPrice[7]}</li>
                </ul>
            </div>
        </div>
    )
}

const stateToProps = (state) => {
    return{
        data: state.data
    }
}


export default connect(stateToProps)(TopBar);

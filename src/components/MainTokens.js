import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './MainTokens.css'

const MainTokens = (props) => {
    const getData = []
    const [name, setName] = useState([])
    const [sigla, setSigla] = useState([])
    const [currentPrice, setCurrentPrice] = useState([])
    const [twentyForHour, setTwentyForHour] = useState([])
    const [marketCap, setMarketCap] = useState([])
    const [volume, setVolume] = useState([])

    useEffect(
        () => {
            if((props.data.length) === 0){
                return
            }else{
                dataConcat()
            }
        },[props.data]
    )

    const dataConcat = () => {
        getData.push(...props.data)
        for(let i = 0; i < 10; i++){
            setName(name => [...name, getData[i].name])
            setCurrentPrice(currentPrice => [...currentPrice, getData[i].current_price])
            setSigla(sigla => [...sigla, getData[i].symbol])
            setTwentyForHour(twentyForHour => [...twentyForHour, getData[i].market_cap_change_percentage_24h])
            setMarketCap(marketCap => [...marketCap, formatValue(getData[i].market_cap)])
            setVolume( volume => [...volume, formatValue(getData[i].total_volume)])
        }
    }

    const formatValue = (x) => {
        const valor = x.toString().split(".")
        valor[0] = valor[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return(valor)
    }

    return (
        <div className="MainTokensDiv">
            <div className="individualToken">
                <h1>Tokens List</h1>
            </div>
            <div className="SubMainTokensDiv">
                <div className="TokensDivToken">
                    <p><b># Name</b></p>
                    <p>1 {name[0]} {sigla[0]}</p>
                    <p>2 {name[1]} {sigla[1]}</p>
                    <p>3 {name[2]} {sigla[2]}</p>
                    <p>4 {name[3]} {sigla[3]}</p>
                    <p>5 {name[4]} {sigla[4]}</p>
                    <p>6 {name[5]} {sigla[5]}</p>
                    <p>7 {name[6]} {sigla[6]}</p>
                    <p>8 {name[7]} {sigla[7]}</p>
                    <p>9 {name[8]} {sigla[8]}</p>
                    <p>10 {name[9]} {sigla[9]}</p>
                </div>
                <div className="TokensDivPrice">
                    <p><b>Price</b></p>
                    <p>{currentPrice[0]}</p>
                    <p>{currentPrice[1]}</p>
                    <p>{currentPrice[2]}</p>
                    <p>{currentPrice[3]}</p>
                    <p>{currentPrice[4]}</p>
                    <p>{currentPrice[5]}</p>
                    <p>{currentPrice[6]}</p>
                    <p>{currentPrice[7]}</p>
                    <p>{currentPrice[8]}</p>
                    <p>{currentPrice[9]}</p>
                </div>
                <div className="TokensDiv24h">
                    <p><b>24h%</b></p>
                    <p>{twentyForHour[0]}</p>
                    <p>{twentyForHour[1]}</p>
                    <p>{twentyForHour[2]}</p>
                    <p>{twentyForHour[3]}</p>
                    <p>{twentyForHour[4]}</p>
                    <p>{twentyForHour[5]}</p>
                    <p>{twentyForHour[6]}</p>
                    <p>{twentyForHour[7]}</p>
                    <p>{twentyForHour[8]}</p>
                    <p>{twentyForHour[9]}</p>
                </div>
                <div className="TokensDivMarketcap">
                    <p><b>Marketcap</b></p>
                    <p>€{marketCap[0]}</p>
                    <p>€{marketCap[1]}</p>
                    <p>€{marketCap[2]}</p>
                    <p>€{marketCap[3]}</p>
                    <p>€{marketCap[4]}</p>
                    <p>€{marketCap[5]}</p>
                    <p>€{marketCap[6]}</p>
                    <p>€{marketCap[7]}</p>
                    <p>€{marketCap[8]}</p>
                    <p>€{marketCap[9]}</p>
                </div>
                <div className="TokensDiv24h">
                    <p><b>Volume(24h)</b></p>
                    <p>€{volume[0]}</p>
                    <p>€{volume[1]}</p>
                    <p>€{volume[2]}</p>
                    <p>€{volume[3]}</p>
                    <p>€{volume[4]}</p>
                    <p>€{volume[5]}</p>
                    <p>€{volume[6]}</p>
                    <p>€{volume[7]}</p>
                    <p>€{volume[8]}</p>
                    <p>€{volume[9]}</p>
                </div>
            </div>
        </div>
    )
}

const stateToProps = (state) => {
    return{
        data: state.data
    }
}

export default connect(stateToProps)(MainTokens)
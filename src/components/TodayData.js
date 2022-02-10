import React, {useEffect, useState} from 'react'
import './TodayData.css'
import imageBackground from '../images/imageBackground.jpg'
import axios from 'axios'
const dotenv = require('dotenv');


export const TodayData = () => {

    useEffect(() => {
        const getTrendingData = () => {
            axios.get('https://api.coingecko.com/api/v3/search/trending')
            .then(res => {
                const {data} = res
                setTrendingOne(data.coins[0].item.name)
                setTrendingTwo(data.coins[1].item.name)
                setTrendingThree(data.coins[2].item.name)
                setTrendingFour(data.coins[3].item.name)
                setTrendingFive(data.coins[4].item.name)
            })
        }
        const getNews = () => {
            axios.get('https://api.marketaux.com/v1/news/all?entity_types=cryptocurrency&api_token=' + process.env.REACT_APP_API_NEWS)
            .then(res => {
                const {data} = res
                setNewsOne(data.data[0].description.substring(0, 150)+ '...')
                setNewsTwo(data.data[1].description.substring(0, 150)+ '...')
                setNewsThree(data.data[2].description.substring(0, 150)+ '...')
                setLinkOne(data.data[0].url)
                setLinkTwo(data.data[1].url)
                setLinkThree(data.data[2].url)
            })
        }
        getTrendingData()
        getNews()
    },[])

    const [trendingOne, setTrendingOne] = useState('')
    const [trendingTwo, setTrendingTwo] = useState('')
    const [trendingThree, setTrendingThree] = useState('')
    const [trendingFour, setTrendingFour] = useState('')
    const [trendingFive, setTrendingFive] = useState('')

    // news 

    const [newsOne, setNewsOne] = useState('')
    const [linkOne, setLinkOne] = useState('')
    const [newsTwo, setNewsTwo] = useState('')
    const [linkTwo, setLinkTwo] = useState('')
    const [newsThree, setNewsThree] = useState('')
    const [linkThree, setLinkThree] = useState('')



    return (
        <div>
            <div className="todayDataLayout">
                <div id="todayDataFirst">
                    <h3>News</h3>
                    <div className='trendingTokens'>
                        <p><b><a href={linkOne}>1º</a></b> {newsOne}</p>
                        <p><b><a href={linkTwo}>2º</a></b>  {newsTwo}</p>
                        <p><b><a href={linkThree}>3º</a></b>  {newsThree}</p>
                    </div>
                </div>
                <div id="todayDataMiddle">
                    <h3>Trending Tokens</h3>
                    <div className='trendingTokens'>
                        <p><b>1º</b> {trendingOne}</p>
                        <p><b>2º</b>  {trendingTwo}</p>
                        <p><b>3º</b>  {trendingThree}</p>
                        <p><b>4º</b>  {trendingFour}</p>
                        <p><b>5º</b>  {trendingFive}</p>
                    </div>
                </div>
                <div id="todayDataLast">
                    <h3> Market Cap Graph</h3>
                    <img src={imageBackground} alt="imageBackground" width="75%"/>
                </div>
            </div>
        </div>
    )
}

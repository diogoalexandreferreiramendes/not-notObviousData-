import React from 'react'
import { Footer } from '../components/Footer'
import MainTokens from '../components/MainTokens'
import { NavBar } from '../components/NavBar'
import { TodayData } from '../components/TodayData'
import TopBar from '../components/TopBar'

const Home = () => {
    
    // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    return (
        <div>
            <TopBar />
            <NavBar />
            <TodayData />
            <MainTokens />
            <Footer />
        </div>
    )
}

export default Home

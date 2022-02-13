import React from 'react'
import { Footer } from '../components/Footer'
import MainTokens from '../components/MainTokens'
import { NavBar } from '../components/NavBar'
import { TodayData } from '../components/TodayData'
import TopBar from '../components/TopBar'

const Home = () => {
    const getWindowDimensions = () => {
        const { innerWidth: width, innerHeight: height } = window;
        return{
            width,
            height
        }
      }

    const anotherOne = () => {
        console.log(window.innerWidth)
    }

    // const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    return (
        <div>
            <TopBar />
            <NavBar />
            <TodayData />
            <MainTokens />
            <button onClick={()=> anotherOne()}>info</button>
            <Footer />
        </div>
    )
}

export default Home

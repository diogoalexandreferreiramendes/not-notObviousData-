import './App.css';
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { connect } from 'react-redux';
import Home from './pages/Home';
import DataPage from './pages/DataPage';
import AnalysisPage from './pages/AnalysisPage';
import LoginPage from './pages/LoginPage';
import SignUp from './pages/SignUp';
import Intro from './pages/Intro';
import { getData } from './redux/actions/getData';
import ConstrutionTime from './pages/ConstrutionTime';
import DashBoard from './pages/DashBoard';
import PrivateRoute from './components/PrivateRoute';
require('dotenv').config()



const App = (props) => {

  const developmentEnviroment = false 
  
  useEffect(
    () => {
      props.getData()
    },[])

  return(
    <Router>
      {(window.location.hostname === "localhost" || developmentEnviroment) ?
      <Switch>
        <Route exact path='/' component={Intro}/>
        <Route path='/home' component={Home}/>
        <Route path='/data' component={DataPage}/>
        <Route path='/analysis' component={AnalysisPage}/>
        <Route path='/loginpage' component={LoginPage}/>
        <Route path='/signup' component={SignUp}/>
        <PrivateRoute path='/dashboard' component={DashBoard}/>
      </Switch>:
      <Switch>
          <Route exact path='/' component={ConstrutionTime}/>
        </Switch>
      }
    </Router>
  )
}

const stateToProps = (state) => {
  return{
    data: state.data
  }
}

const getTheData = (dispatch) => {
  return{
    getData: () => dispatch(getData())
  }
}

export default connect(stateToProps, getTheData)(App);

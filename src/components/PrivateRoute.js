import React from 'react';
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../firebase';


const PrivateRoute = ({component : Component, ...rest }) => {

   const currentUser = useAuth()

  return(
      <Route
        {...rest}
        render={props => {
            return currentUser ? <Component {...props} /> : <Redirect to="/dashboard" />
        }}
      >
      </Route>
  )
};

export default PrivateRoute;

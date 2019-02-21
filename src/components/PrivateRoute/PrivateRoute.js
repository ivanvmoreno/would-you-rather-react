import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, userAuthenticated, ...props }) => (
  <Route {...props} render={ props => (
    userAuthenticated
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { referrer: props.location }
      }} />
  )} />
);

export default PrivateRoute;

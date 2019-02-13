import React, { Component } from 'react';
import Login from '../containers/Login/Login';
import Dashboard from '../containers/Dashboard/Dashboard';
import NewPoll from '../containers/NewPoll/NewPoll';
import Leaderboard from '../containers/Leaderboard/Leaderboard';
import Navbar from '../containers/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return(
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </BrowserRouter>
    );
  }
}

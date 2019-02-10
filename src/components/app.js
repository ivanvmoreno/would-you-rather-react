import React, { Component } from 'react';
import Login from '../containers/Login/Login';
import Dashboard from '../containers/Dashboard/Dashboard';
import NewPoll from '../containers/NewPoll/NewPoll';
import Leaderboard from '../containers/Leaderboard/Leaderboard';

export default class App extends Component {
  render() {
    return(
      <Leaderboard />
    );
  }
}

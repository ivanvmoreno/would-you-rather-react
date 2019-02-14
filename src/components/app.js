import React, { Component } from 'react';
import Login from '../containers/Login/Login';
import Dashboard from '../containers/Dashboard/Dashboard';
import Poll from './Poll/Poll';
import Leaderboard from '../containers/Leaderboard/Leaderboard';
import Navbar from '../containers/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.loggedUser = this.loggedUser.bind(this);
  }

  loggedUser() {
    if (!Object.keys(this.props.loggedUser).length) {
      return false;
    }
    return true;
  }

  render() {
    return(
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route exact path='/dashboard' render={() => this.loggedUser() ? <Dashboard /> : <Redirect to="/login" />} />
          <Route exact path='/questions/:id' render={() => this.loggedUser() ? <Poll /> : <Redirect to="/login" />} />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  loggedUser: state.loggedUser
});

export default connect(mapStateToProps)(App);

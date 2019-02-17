import React, { Component } from 'react';
import Login from '../containers/Login/Login';
import Dashboard from '../containers/Dashboard/Dashboard';
import Poll from './Poll/Poll';
import Leaderboard from '../containers/Leaderboard/Leaderboard';
import Navbar from '../containers/Navbar/Navbar';
import NewPoll from '../containers/NewPoll/NewPoll';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class App extends Component {
  loggedUser() {
    if (!Object.keys(this.props.loggedUser).length) {
      return false;
    }
    return true;
  }

  loggedUser = this.loggedUser.bind(this);

  render() {
    return(
      <Router>
        <div>
          <Route component={Navbar} />
          <Route exact path='/' render={() => this.loggedUser() ? <Dashboard /> : <Redirect to="/login" />} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/questions/:id' render={(match) => this.loggedUser() ? <Poll match={match.match}/> : <Redirect to="/login" />} />
          <Route exact path='/leaderboard' render={() => this.loggedUser() ? <Leaderboard /> : <Redirect to="/login" />} />
          <Route exact path='/add' render={() => this.loggedUser() ? <NewPoll /> : <Redirect to="/login" />} />
          {/* <Route component={PageNotFound} /> */}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  loggedUser: state.loggedUser
});

export default connect(mapStateToProps)(App);

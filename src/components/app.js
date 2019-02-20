import React, { Component } from 'react';
import Login from '../components/Login/Login';
import Dashboard from '../components/Dashboard/Dashboard';
import Poll from './Poll/Poll';
import Leaderboard from '../components/Leaderboard/Leaderboard';
import Navbar from '../components/Navbar/Navbar';
import NewPoll from '../components/NewPoll/NewPoll';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import './app.css';

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
          <div className="app__container">
            <Navbar />
            <Switch>
              <Route exact path='/' render={() => this.loggedUser() ? <Dashboard /> : <Redirect to="/login" />} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/questions/:id' render={(match) => this.loggedUser() ? <Poll match={match.match}/> : <Redirect to="/login" />} />
              <Route exact path='/leaderboard' render={() => this.loggedUser() ? <Leaderboard /> : <Redirect to="/login" />} />
              <Route exact path='/add' render={() => this.loggedUser() ? <NewPoll /> : <Redirect to="/login" />} />
              <Route component={PageNotFound} />
            </Switch>
          </div>
        </Router>
    );
  }
}

const mapStateToProps = state => ({
  loggedUser: state.loggedUser
});

export default connect(mapStateToProps)(App);

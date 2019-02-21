import React, { Component } from 'react';
import Login from '../components/Login/Login';
import Dashboard from '../components/Dashboard/Dashboard';
import Poll from './Poll/Poll';
import Leaderboard from '../components/Leaderboard/Leaderboard';
import Navbar from '../components/Navbar/Navbar';
import NewPoll from '../components/NewPoll/NewPoll';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
    const isAuthenticated = this.loggedUser();

    return(
        <Router>
          <div className="app__container">
            <Navbar />
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard} userAuthenticated={isAuthenticated} />
              <Route exact path='/login' component={Login} />
              <PrivateRoute exact path='/questions/:id' component={Poll} userAuthenticated={isAuthenticated} />
              <PrivateRoute exact path='/leaderboard' component={Leaderboard} userAuthenticated={isAuthenticated} />
              <PrivateRoute exact path='/add' component={NewPoll} userAuthenticated={isAuthenticated} />
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../../actions';
import './Navbar.css';

class Navbar extends Component {
  loggedMenu() {
    if (this.props.loggedUser) {
      return(
        <ul className="navbar__loggedmenu">
          <li>Hello, {this.props.users[this.props.loggedUser].name.slice(0, this.props.users[this.props.loggedUser].name.indexOf(' '))}!</li>
          <li><img src={this.props.users[this.props.loggedUser].avatarURL} alt={this.props.users[this.props.loggedUser].name} /></li>
          <li><a href="javascript:void(0)" onClick={() => this.props.logout()}>Logout</a></li>
        </ul>
      );
    }
  }

  loggedMenu = this.loggedMenu.bind(this);

  render() {
    return(
      <div className="navbar__wrapper">
        <ul className="navbar__defaultmenu">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/add" activeClassName="current-page">New question</NavLink></li>
          <li><NavLink to="/leaderboard" activeClassName="current-page">Leaderboard</NavLink></li>
        </ul>
        {this.loggedMenu()}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  loggedUser: state.loggedUser,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);

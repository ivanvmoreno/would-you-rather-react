import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions';
import './Navbar.css';

class Navbar extends Component {
  loggedMenu() {
    if (this.props.loggedUser) {
      return(
        <ul class="navbar__loggedmenu">
          <li>Hello, {this.props.users[this.props.loggedUser].name}</li>
          <li>{this.props.users[this.props.loggedUser].avatarURL}</li>
          <li><a href="javascript:void(0)" onClick={() => this.props.logout()}>Logout</a></li>
        </ul>
      );
    }
  }

  loggedMenu = this.loggedMenu.bind(this);

  render() {
    return(
      <div class="navbar">
        <ul class="navbar__defaultmenu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/add">New question</Link></li>
          <li><Link to="/leaderboard">Leaderboard</Link></li>
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

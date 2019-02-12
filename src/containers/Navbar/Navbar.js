import React, { Component } from 'react';
import { connect } from 'react-redux';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedUserInfo: {}
    }
    this.getLoggedUserInfo = this.getLoggedUserInfo.bind(this);
    this.loggedMenu = this.loggedMenu.bind(this);
  }

  componentWillMount() {
    if (this.props.loggedUser) {
      this.getLoggedUserInfo();
    }
  }

  loggedMenu() {
    if (this.props.loggedUser) {
      return(
        <div>
          <ul>
            <li>Hello, {`${this.state.loggedUserInfo.name.first} ${this.state.loggedUserInfo.name.last}`}</li>
            <li>Avatar</li>
            <li>Logout</li>
          </ul>
        </div>
      );
    }
  }

  getLoggedUserInfo() {
    let loggedUserInfo = this.props.users.filter(user => user.id === this.props.loggedUser)[0];
    this.setState({
      loggedUserInfo
    });
  }

  render() {
    return(
      <div>
        <ul>
          <li>Home</li>
          <li>New question</li>
          <li>Leaderboard</li>
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

export default connect(mapStateToProps)(Navbar);

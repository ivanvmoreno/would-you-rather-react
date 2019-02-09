import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions';

class Login extends Component {
  render() {
    return(
      <ul>
        {this.props.users.map(user => <li>{`${user.name.firstName} ${user.name.lastName}`}</li>)}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  login: userId => dispatch(login(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

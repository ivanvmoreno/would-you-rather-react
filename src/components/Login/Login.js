import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Select from 'react-select';
import { getUsers, login } from '../../actions';
import './Login.css';

class Login extends Component {
  state = {
    selectedUser: '',
    toDashboard: false,
    redirectToReferrer: false
  }

  componentDidMount() {
    this.props.getUsers();
  }

  getSelectOptions() {
    let options = [];
    for (let prop in this.props.users) {
      options.push({
        value: this.props.users[prop].id,
        label: this.props.users[prop].name
      });
    }
    return options;
  }

  handleUserSelected(selectedUser) {
    this.setState({ selectedUser: selectedUser });
  }

  handleLogin() {
    if (this.state.selectedUser) {
      this.props.login(this.state.selectedUser.value);
      if (this.props.location.state.referrer) {
        this.setState({
          redirectToReferrer: true
        });
      } else {
        this.setState({
          toDashboard: true
        });
      }
    }
  }

  getSelectOptions = this.getSelectOptions.bind(this);
  handleUserSelected = this.handleUserSelected.bind(this);
  handleLogin = this.handleLogin.bind(this);

  render() {
    if (this.state.toDashboard) {
      return(<Redirect to="/" />);
    } else if (this.state.redirectToReferrer) {
      return(<Redirect to={this.props.location.state.referrer} />)
    }

    return(
      <div className="login__wrapper">
        <div className="login__headline">
          <h4>Welcome to the Would You Rather App!</h4>
          <span>Please sign in to continue</span>
        </div>
        <div className="login__body">
        <div className="login__body--image">
          <img src="/login.png" alt="login" />
        </div>
          <h3>Sign in</h3>
          <Select
            className="login__body--selector"
            value={this.state.selectedUser}
            onChange={this.handleUserSelected}
            options={this.getSelectOptions()}
          />
          <button type="button" onClick={this.handleLogin}>Sign in</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  login: userId => dispatch(login(userId)),
  getUsers: () => dispatch(getUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);

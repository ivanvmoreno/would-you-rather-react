import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Select from 'react-select';
import { getUsers, login } from '../../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: '',
      toDashboard: false
    }
    this.getSelectOptions = this.getSelectOptions.bind(this);
    this.handleUserSelected = this.handleUserSelected.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
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
      this.setState({
        toDashboard: true
      });
    }
  }

  render() {
    if (this.state.toDashboard) {
      return(<Redirect to="/" />);
    }

    return(
      <div>
        <Select
          value={this.state.selectedUser}
          onChange={this.handleUserSelected}
          options={this.getSelectOptions()}
        />
        <input type="button" value="Log in!" onClick={this.handleLogin} />
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

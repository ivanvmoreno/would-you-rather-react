import React, { Component } from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import { login } from '../../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedUser: ''
    }
    this.getSelectOptions = this.getSelectOptions.bind(this);
    this.handleUserSelected = this.handleUserSelected.bind(this);
  }

  getSelectOptions() {
    return this.props.users.map(user => {
      return {
        value: user.id,
        label: `${user.name.first} ${user.name.last}`
      };
    });
  }

  handleUserSelected(selectedUser) {
    this.setState({ selectedUser: selectedUser });
  }

  render() {
    return(
      <div>
        <div>Current logged user: {this.props.loggedUser}</div>
        <Select
          value={this.state.selectedUser}
          onChange={this.handleUserSelected}
          options={this.getSelectOptions()}
        />
        <input type="button" value="Log in!" onClick={() => this.props.login(this.state.selectedUser.value)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  loggedUser: state.loggedUser
});

const mapDispatchToProps = dispatch => ({
  login: userId => dispatch(login(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

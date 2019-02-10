import React, { Component } from 'react';
import { connect } from 'react-redux';
import Poll from '../../components/Poll/Poll';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterPolls: 'unanswered'
    }
  }

  getFilteredPolls() {
    //if (this.state.filterPolls === 'unanswered')
  }

  render() {
    return(
      <div>
        <Poll pollInfo={this.props.polls[0]} users={this.props.users} loggedUser={1} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  polls: state.polls,
  loggedUser: state.loggedUser
});

export default connect(mapStateToProps)(Dashboard);

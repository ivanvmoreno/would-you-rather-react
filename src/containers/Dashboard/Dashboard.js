import React, { Component } from 'react';
import { connect } from 'react-redux';
import Poll from '../../components/Poll/Poll';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'answered',
      answeredPolls: []
    }
    this.getAnsweredPolls = this.getAnsweredPolls.bind(this);
  }

  componentWillMount() {
    this.getAnsweredPolls();
  }

  getAnsweredPolls() {
    let answeredPolls = this.props.users.filter(user => user.id === this.props.loggedUser)[0].answeredPolls.map(poll => poll.pollId);
    this.setState({
      answeredPolls
    });
  }

  render() {
    return(
      <div>
        {this.props.polls.filter(poll => {
          let isAnswered = this.state.answeredPolls.indexOf(poll.id) !== -1 ? true : false;
          if (this.state.filter === 'answered') {
            return true;
          }
          return false;
        }).map(poll => {
          return(
            <Poll users={this.props.users} pollInfo={poll} loggedUser={this.props.loggedUser} />
          );
        })}
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

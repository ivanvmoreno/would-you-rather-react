import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      leaders: []
    }
    this.getLeaders = this.getLeaders.bind(this);
  }

  componentWillMount() {
    this.getLeaders();
  }

  getLeaders() {
    let users = this.props.users.map(user => {
      let answeredPolls = user.answeredPolls.length;
      let createdPolls = this.props.polls.filter(poll => {
        return poll.id === user.id;
      }).length;
      return {
        id: user.id,
        name: user.name,
        answeredPolls,
        createdPolls,
        score: answeredPolls + createdPolls
      };
    });
    while (users.length > 3) {
      users.splice(users.findIndex(user => user.score === Math.min(...users.map(user => user.score))));
    }
    this.setState({
      leaders: users
    });
  }

  render() {
    return(
      this.state.leaders.map(leader => {
        return (
          <div>
            <div>Photo</div>
            <div>
              <h2>{leader.name.first} {leader.name.last}</h2>
              <div>Answered questions: {leader.answeredPolls}</div>
              <div>Created questions: {leader.createdPolls}</div>
            </div>
            <div>Score: {leader.score}</div>
          </div>
        );
      })
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  polls: state.polls
});

export default connect(mapStateToProps)(Leaderboard);

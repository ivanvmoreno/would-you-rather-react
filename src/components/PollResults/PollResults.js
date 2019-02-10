import React, { Component } from 'react';

class PollResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswers: [],
      totalUsers: 0
    }
    this.getPollStats = this.getPollStats.bind(this);
  }

  componentWillMount() {
    this.getPollStats();
  }

  getPollStats() {
    let userAnswers = [0,0];
    let totalUsers = this.props.users.filter(user => {
      let answerIndex = user.answeredPolls.findIndex(answeredPoll => answeredPoll.pollId === this.props.pollInfo.id);
      if (answerIndex !== -1) {
        userAnswers[user.answeredPolls[answerIndex].userAnswer]++;
        return true;
      }
      return false;
    }).length;
    this.setState({
      userAnswers,
      totalUsers
    });
  }

  render() {
    return(
      <div>
        <h2>Results:</h2>
        {this.props.pollInfo.answers.map((answer, index) => {
          return(
            <div>
              <h3>Would you rather {answer}</h3>
              <progress value={this.state.userAnswers[index]} max={this.state.totalUsers} />
            </div>
          );
        })}
      </div>
    );
  }
};

export default PollResults;

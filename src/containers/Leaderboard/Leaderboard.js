import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
  constructor(props) {
    super(props);
    this.getLeaders = this.getLeaders.bind(this);
  }

  componentDidMount() {
  }

  getLeaders() {
    const users = [];
    for (let user in this.props.users) {
      const currentUser = this.props.users[user];
      let answeredPolls = Object.keys(currentUser.answers).length;
      let createdPolls = currentUser.questions.length;
      users.push({
        id: user.id,
        name: user.name,
        avatarURL: currentUser.avatarURL,
        answeredPolls,
        createdPolls,
        score: answeredPolls + createdPolls
      });
    }
    while (users.length > 3) {
      users.splice(users.findIndex(user => user.score === Math.min(...users.map(user => user.score))));
    }
    return users;
  }

  render() {
    return(<div>Test</div>
      // <div>
      //   {this.getLeaders().map(leader => {
      //     return (
      //       <div>
      //         <div>Photo</div>
      //         <div>
      //           <h2>{leader.name.first} {leader.name.last}</h2>
      //           <div>Answered questions: {leader.answeredPolls}</div>
      //           <div>Created questions: {leader.createdPolls}</div>
      //         </div>
      //         <div>Score: {leader.score}</div>
      //       </div>
      //     );
      //   })}
      // </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  loggedUser: state.loggedUser
});

export default connect(mapStateToProps)(Leaderboard);

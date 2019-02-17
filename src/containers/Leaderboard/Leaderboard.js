import React from 'react';
import { connect } from 'react-redux';

const getLeaders = (users) => {
  const filteredUsers = [];
  for (let user in users) {
    const currentUser = users[user];
    let answeredPolls = Object.keys(currentUser.answers).length;
    let createdPolls = currentUser.questions.length;
    filteredUsers.push({
      id: currentUser.id,
      name: currentUser.name,
      avatarURL: currentUser.avatarURL,
      answeredPolls,
      createdPolls,
      score: answeredPolls + createdPolls
    });
  }
  while (filteredUsers.length > 3) {
    filteredUsers.splice(filteredUsers.findIndex(user => user.score === Math.min(...filteredUsers.map(user => user.score))));
  }
  return filteredUsers.sort((a,b) => -(a.score)+b.score);
}

const Leaderboard = props => {
  return(
    <div>
      {getLeaders(props.users).map(leader => {
        return (
          <div key={leader.id}>
            <div>Photo</div>
            <div>
              <h2>{leader.name} {leader.name.last}</h2>
              <div>Answered questions: {leader.answeredPolls}</div>
              <div>Created questions: {leader.createdPolls}</div>
            </div>
            <div>Score: {leader.score}</div>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(Leaderboard);

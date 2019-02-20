import React from 'react';
import { connect } from 'react-redux';
import './Leaderboard.css';

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
    <div className="leaderboard__wrapper">
      {getLeaders(props.users).map(leader => {
        return (
          <div key={leader.id} className="leaderboard__leader">
            <div className="leaderboard__leader--avatar"><img src={`/${leader.avatarURL}`} alt={leader.name} /></div>
            <div className="leaderboard__leader--content">
              <h2>{leader.name} {leader.name.last}</h2>
              <div className="leaderboard__leader--stats">
                <div className="leaderboard__leader--stats-heading">Answered questions</div>
                <div className="leaderboard__leader--stats-score">{leader.answeredPolls}</div>
              </div>
              <div className="leaderboard__leader--stats">
                <div className="leaderboard__leader--stats-heading">Created questions</div>
                <div className="leaderboard__leader--stats-score">{leader.createdPolls}</div>
              </div>
            </div>
            <div className="leaderboard__leader--score">
              <div className="leaderboard__leader--score-heading">Score</div>
              <div className="leaderboard__leader--score-result">{leader.score}</div>
            </div>
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

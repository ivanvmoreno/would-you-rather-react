import React, { Component } from 'react';
import PollSubmit from '../../containers/PollSubmit/PollSubmit';
import PollResults from '../PollResults/PollResults';

class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'unanswered',
      pollCreator: {}
    };
    this.getPollCreatorInfo = this.getPollCreatorInfo.bind(this);
  }

  componentWillMount() {
    this.getPollCreatorInfo();
  }

  getPollCreatorInfo() {
    // get all user info except answered polls
    // is poll answered by the provided user?
    let pollCreator = this.props.users.filter(user => {
      return user.id === this.props.pollInfo.creator
    })[0];
    this.setState({ pollCreator: {
      avatar: pollCreator.avatar,
      name: pollCreator.name
    } });
  }

  render() {
    return(
      <div>
        <div>Asked by {`${this.state.pollCreator.name.first} ${this.state.pollCreator.name.last}`}</div>
        <div>
          <div>User avatar</div>
            <div>
              { this.state.status === 'unanswered'
                ? <PollSubmit answers={this.props.pollInfo.answers} user={this.props.loggedUser} pollId={this.props.pollInfo.id} />
                : <PollResults pollInfo={this.props.pollInfo} users={this.props.users} loggedUser={this.props.loggedUser} />
              }
            </div>
        </div>
      </div>
    );
  }
}

export default Poll;

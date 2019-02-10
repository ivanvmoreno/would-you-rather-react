import React, { Component } from 'react';
import PollSubmit from '../../containers/PollSubmit/PollSubmit';
import PollResults from '../PollResults/PollResults';

class Poll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'answered',
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
  }

  render() {
    return(
      <div>
        <div>User avatar</div>
        { this.state.status === 'unanswered'
          ? <PollSubmit answers={this.props.pollInfo.answers} user={this.props.loggedUser} pollId={this.props.pollInfo.id} />
          : <PollResults pollInfo={this.props.pollInfo} users={this.props.users} loggedUser={this.props.loggedUser} />
        }
      </div>
    );
  }
}

export default Poll;

import React, { Component } from 'react';
import PollSubmit from '../../components/PollSubmit/PollSubmit';
import PollResults from '../PollResults/PollResults';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { submitVote } from '../../actions';
import './Poll.css';

class Poll extends Component {
  state = {
    questionNotFound: false
  };

  componentWillMount() {
    this.getQuestionInfo();
  }

  getQuestionInfo() {
    if (!this.props.questions[this.props.match.params.id]) {
      this.setState({
        questionNotFound: true
      });
    }
  }

  handleUserAnswer(answer) {
    this.props.submitVote(this.props.loggedUser, this.props.match.params.id, answer);
  }

  getQuestionInfo = this.getQuestionInfo.bind(this);
  handleUserAnswer = this.handleUserAnswer.bind(this);

  render() {
    if (this.state.questionNotFound) {
      return(<Redirect to="/notfound" />);
    }

    let question = {
      ...this.props.questions[this.props.match.params.id],
      author: this.props.users[this.props.questions[this.props.match.params.id].author]
    };

    return(
      <div className="question__wrapper">
        <div className="question__author">{question.author.name} asks:</div>
        <div className="question__body">
          <div className="question__body--avatar"><img src={`/${question.author.avatarURL}`} alt={question.author.name} /></div>
            {<div className="question__body--component-wrapper">
              { this.props.users[this.props.loggedUser].answers.hasOwnProperty(this.props.match.params.id)
                ? <PollResults question={question} users={this.props.users} userAnswer={this.props.users[this.props.loggedUser].answers[this.props.match.params.id]} />
                : <PollSubmit question={this.props.questions[this.props.match.params.id]} submitVote={this.handleUserAnswer} />
              }
            </div>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  questions: state.questions,
  loggedUser: state.loggedUser
});

const mapDispatchToProps = dispatch => ({
  submitVote: (authedUser, qid, answer) => submitVote(dispatch, { authedUser, qid, answer })
});

export default connect(mapStateToProps, mapDispatchToProps)(Poll);

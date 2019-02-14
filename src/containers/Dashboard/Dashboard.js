import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../../actions';
import Poll from '../../components/Poll/Poll';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'answered',
      clickedPoll: '',
    }
    this.getFilteredQuestions = this.getFilteredQuestions.bind(this);
    this.getUserFromId = this.getUserFromId.bind(this);
  }

  componentWillMount() {
    this.props.getQuestions();
  }

  getFilteredQuestions() {
    let filteredQuestions = [];
    for (let question in this.props.questions) {
      let isAnswered = this.props.loggedUser.answers.hasOwnProperty(this.props.questions[question].id) === true;
      if (isAnswered && this.state.filter === 'answered') {
        filteredQuestions.push(this.props.questions[question]);
      } else if (!isAnswered && this.state.filter === 'unanswered') {
        filteredQuestions.push(this.props.questions[question]);
      }
    }
    return filteredQuestions;
  }

  getUserFromId(id) {
    let match;
    for (let user in this.props.users) {
      let currentUser = this.props.users[user];
      if (currentUser.id === id) {
        match = currentUser;
      }
    }
    return match;
  }

  handleViewPoll(questionId) {

  }

  render() {
    if (this.state.clickedPoll) {
      return <Redirect to="/login" />;
    }

    return(
      <div>
        {this.getFilteredQuestions().map(question => {
          let questionCreator = this.getUserFromId(question.author);
          return(
            <div>
              <div>{questionCreator.name} asks...</div>
              <div>
                <div>Avatar</div>
                <div>
                  <h3>Would you rather...</h3>
                  <p>{question.optionOne.text}</p>
                  <button type="button" onClick={() => this.setState({clickedPoll: 'dhdhh'})}>View poll</button>
                </div>
              </div>
            </div>);
        })}
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
  getQuestions: () => dispatch(getQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

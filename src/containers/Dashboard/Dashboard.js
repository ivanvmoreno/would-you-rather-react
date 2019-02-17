import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../../actions';
import Poll from '../../components/Poll/Poll';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
  state = {
    filter: 'unanswered',
    clickedQuestion: '',
  }

  componentWillMount() {
    this.props.getQuestions();
  }

  getFilteredQuestions() {
    let filteredQuestions = [];
    for (let question in this.props.questions) {
      let isAnswered = this.props.users[this.props.loggedUser].answers.hasOwnProperty(this.props.questions[question].id) === true;
      if (isAnswered && this.state.filter === 'answered') {
        filteredQuestions.push(this.props.questions[question]);
      } else if (!isAnswered && this.state.filter === 'unanswered') {
        filteredQuestions.push(this.props.questions[question]);
      }
    }
    return filteredQuestions.sort((a,b) => -a.timestamp+b.timestamp);
  }

  handleQuestionClick(event) {
    this.setState({
      clickedQuestion: event.target.value
    });
  }

  handleFilterSwitch(event) {
    this.setState({
      filter: event.target.value
    });
  }

  getFilteredQuestions = this.getFilteredQuestions.bind(this);
  handleQuestionClick = this.handleQuestionClick.bind(this);
  handleFilterSwitch = this.handleFilterSwitch.bind(this);

  render() {
    if (this.state.clickedQuestion) {
      return <Redirect to={`/questions/${this.state.clickedQuestion}`} />;
    }

    return(
      <div>
        <div>
          <button type="button" value="unanswered" onClick={this.handleFilterSwitch}>View unanswered</button>
          <button type="button" value="answered" onClick={this.handleFilterSwitch}>View answered</button>
        </div>
        <div>
            {this.getFilteredQuestions().map(question => {
            let questionCreator = this.props.users[question.author];
            return(
              <div key={question.id}>
                <div>{questionCreator.name} asks...</div>
                <div>
                  <div>Avatar</div>
                  <div>
                    <h3>Would you rather...</h3>
                    <p>{question.optionOne.text}</p>
                    <button type="button" value={question.id} onClick={this.handleQuestionClick}>View poll</button>
                  </div>
                </div>
              </div>);
          })}
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
  getQuestions: () => dispatch(getQuestions())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

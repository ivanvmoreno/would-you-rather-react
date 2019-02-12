import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getQuestions } from '../../actions';
import Poll from '../../components/Poll/Poll';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'answered'
    }
    this.getFilteredQuestions = this.getFilteredQuestions.bind(this);
  }

  componentWillMount() {
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.loggedUser.id === "tylermcginnis") {
      nextProps.getQuestions();
    }
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

  render() {
    return(
      <div>
        {this.getFilteredQuestions().map(question => {
          return(<div>{question.id}</div>);
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

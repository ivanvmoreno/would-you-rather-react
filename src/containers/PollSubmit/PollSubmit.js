import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitVote } from '../../actions';

class PollSubmit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedAnswer: ''
    }
    this.handleSelectAnswer = this.handleSelectAnswer.bind(this);
  }

  handleSelectAnswer(event) {
    this.setState({
      selectedAnswer: parseInt(event.target.value)
    });
  }

  render() {
    return(
      <div>
        <h2>Would you rather...</h2>
        <form>
          {this.props.answers.map((answer, index) => {
            return (
              <label key={answer}><input type="radio" onClick={this.handleSelectAnswer} value={index} name="pollAnswer" /> {answer}</label>
            );
          })}
        </form>
        <button type="button" onClick={() => this.props.submitVote(this.props.user, this.props.pollId, this.state.selectedAnswer)}>Submit vote</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  submitVote: (user, pollId, selectedAnswer) => dispatch(submitVote(user, pollId, selectedAnswer))
});

export default connect(null,mapDispatchToProps)(PollSubmit);

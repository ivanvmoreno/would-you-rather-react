import React, { Component } from 'react';
import { connect } from 'react-redux';
import './PollSubmit.css';

export default class PollSubmit extends Component {
  state = {
    selectedAnswer: ''
  }

  handleSelectAnswer(event) {
    this.setState({
      selectedAnswer: event.target.value
    });
  }

  handleSelectAnswer = this.handleSelectAnswer.bind(this);

  render() {
    return(
      <div className="submit__wrapper">
        <h2 className="submit__title">Would you rather...</h2>
        <form className="submit__form">
          <label key="0"><input type="radio" onClick={this.handleSelectAnswer} value="optionOne" name="pollAnswer" /> {this.props.question.optionOne.text}</label>
          <label key="1"><input type="radio" onClick={this.handleSelectAnswer} value="optionTwo" name="pollAnswer" /> {this.props.question.optionTwo.text}</label>
        </form>
        <button type="button" onClick={() => this.props.submitVote(this.state.selectedAnswer)}>Submit vote</button>
      </div>
    );
  }
}
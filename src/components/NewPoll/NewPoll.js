import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newPoll } from '../../actions';
import { Redirect } from 'react-router-dom';
import './NewPoll.css';

class NewPoll extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toDashboard: false
  }

  handleInputChange = this.handleInputChange.bind(this);
  handleButtonClick = this.handleButtonClick.bind(this);

  handleInputChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleButtonClick() {
    this.props.newPoll(this.state.optionOne, this.state.optionTwo, this.props.loggedUser);
    this.setState({
      toDashboard: true
    });
  }

  render() {
    if (this.state.toDashboard) {
      return(<Redirect to="/" />);
    }

    return(
      <div className="newpoll__wrapper">
        <div className="newpoll__headline">Create New Question</div>
        <div className="newpoll__body">
          <div className="newpoll__body--instructions">Complete the question:</div>
          <h3>Would you rather...</h3>
            <div className="newpoll__body--form">
              <input id="optionOne" type="text" onChange={this.handleInputChange} value={this.state.optionOne} />
              <div className="newpoll__body--or">OR</div>
              <input id="optionTwo" type="text" onChange={this.handleInputChange} value={this.state.optionTwo} />
              <button type="button" onClick={this.handleButtonClick}>Create new poll</button>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedUser: state.loggedUser
});

const mapDispatchToProps = dispatch => ({
  newPoll: (optionOne, optionTwo, creator) => dispatch(newPoll(optionOne, optionTwo, creator))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPoll);

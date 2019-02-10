import React, { Component } from 'react';
import { connect } from 'react-redux';
import { newPoll } from '../../actions';

class NewPoll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      answers: ['','']
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    let updatedInput = this.state.answers.map((answer, index) => {
      if ((!event.target.previousSibling && index === 0) || (event.target.previousSibling && index === 1)) {
        return event.target.value;
      }
      return answer;
    });
    this.setState({
      answers: updatedInput
    })
  }

  render() {
    return(
      <div>
        <div>Create new question</div>
        <div>
          <h3>Would you rather...</h3>
            <div>
              <input type="text" onChange={this.handleInputChange} value={this.state.answers[0]} />
              <hr />
              <input type="text" onChange={this.handleInputChange} value={this.state.answers[1]} />
              <button type="button" onClick={() => this.props.newPoll(this.state.answers, this.props.loggedUser)}>Create new poll</button>
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
  newPoll: (answers, creator) => dispatch(newPoll(answers, creator))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewPoll);

import React from 'react';
import './PollResults.css';

const PollResults = (props) => {

  let totalVotes = props.question.optionOne.votes.length+props.question.optionTwo.votes.length;
  let optionOnePercentage = `${props.question.optionOne.votes.length/totalVotes*100}%`;
  let optionTwoPercentage = `${props.question.optionTwo.votes.length/totalVotes*100}%`;

  return(
    <div className="results__wrapper">
      <h2 className="results__heading">Results:</h2>
      <div className={'results__option' + (props.userAnswer === 'optionOne' ? ' results__option--userselected' : '')}>
        <h4>Would you rather {props.question.optionOne.text}</h4>
        <div className="progress"><div style={{width: optionOnePercentage}}><span style={{display: parseInt(optionOnePercentage) !== 0 ? 'inherit' : 'none'}}>{parseInt(optionOnePercentage)}%</span></div></div>
        <div className="results__option--votes">{props.question.optionOne.votes.length} out of {totalVotes} votes</div>
      </div>
      <div className={'results__option' + (props.userAnswer === 'optionTwo' ? ' results__option--userselected' : '')}>
        <h4>Would you rather {props.question.optionTwo.text}</h4>
        <div className="progress"><div style={{width: optionTwoPercentage}}><span style={{display: parseInt(optionTwoPercentage) !== 0 ? 'inherit' : 'none'}}>{parseInt(optionTwoPercentage)}%</span></div></div>
        <div className="results__option--votes">{props.question.optionTwo.votes.length} out of {totalVotes} votes</div>
      </div>
    </div>
    );
  };

  export default PollResults;

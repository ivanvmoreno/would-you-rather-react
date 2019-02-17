import React from 'react';

const PollResults = (props) => {
  
  let totalVotes = props.question.optionOne.votes.length+props.question.optionTwo.votes.length;

  return(
    <div>
      <h2>Results:</h2>
      <div>
        <h3>Would you rather {props.question.optionOne.text}</h3>
        <progress value={props.question.optionOne.votes.length} max={totalVotes} />
        <div>{props.question.optionOne.votes.length} out of {totalVotes}</div>
      </div>
      <div>
        <h3>Would you rather {props.question.optionTwo.text}</h3>
        <progress value={props.question.optionTwo.votes.length} max={totalVotes} />
        <div>{props.question.optionTwo.votes.length} out of {totalVotes}</div>
      </div>
    </div>
    );
  };

  export default PollResults;

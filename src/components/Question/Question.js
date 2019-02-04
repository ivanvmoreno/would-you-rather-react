import React from 'react';
import './Question.css';

function Question(props) {
  return(
    <div class="question__wrapper">
      <div class="question__header">
        {props.creator} asks...
      </div>
      <div class="question__avatar">
        <img src="https://via.placeholder.com/300" alt="User avatar" />
      </div>
      <div class="question__body">
        <h2>Would you rather...</h2>
        <ul>
          <form>
            <label><input type="radio" name="question" value="answer1"/> {props.questions[0]}</label>
            <label><input type="radio" name="question" value="answer2"/> {props.questions[1]}</label>
          </form>
        </ul>
        <button type="button">Submit</button>
      </div>
    </div>
  );
}

export default Question;

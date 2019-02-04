import React from 'react';
import Question from '../Question/Question';
import './Dashboard.css';

function Dashboard (props) {
  return(
    <Question creator="Iván Moreno" questions={['This is question 1', 'This is question 2']} />
  );
}

export default Dashboard;

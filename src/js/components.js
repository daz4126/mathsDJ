import { h } from 'hyperapp'
import topics from './topics.js'

 export const Question = ({topic, numbers, showAnswer, key}) => {
     const Question = topics[topic].component;
     return <Question  numbers={numbers} showAnswer={showAnswer} key ={key} />;
 };

export const Multiplication = ({numbers, showAnswer = true, key}) => (
    <li key={key}>{numbers[0]} &times; {numbers[1]} {showAnswer ? (<div class='answer'>= {numbers[0]*numbers[1]}</div>) : null}</li>
 );

export const Division = ({numbers, showAnswer = true, key}) =>  (
      <li key={key}>{numbers[0]*numbers[1]} &divide; {numbers[1]} {showAnswer ? (<div class='answer'>= {numbers[0]}</div>) : null}</li>
 );

 export const Equation = ({numbers, showAnswer = true, key}) =>  (
       <li key={key}>{numbers[0]===1 ? '' : numbers[0]}<i>x</i> + {numbers[1]} = {numbers[0]*numbers[2] + numbers[1]} {showAnswer ? (<div class='answer'><i>x</i> = {numbers[2]}</div>) : null}</li>
  );

  export const Percent = ({numbers, showAnswer = true, key}) =>  (
        <li key={key}>{numbers[0]*5}% of {20*numbers[1]} {showAnswer ? (<div class='answer'>= {numbers[1]*numbers[0]}</div>) : null}</li>
   );

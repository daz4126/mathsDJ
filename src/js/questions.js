import { h } from 'hyperapp'

export const Multiplication = ({numbers, showAnswer = true, key}) => (
    <li key={key}>{numbers[0]} &times; {numbers[1]} {showAnswer ? (<div class='answer'>= {numbers[0]*numbers[1]}</div>) : null}</li>
 );

export const Division = ({numbers, showAnswer = true, key}) =>  (
      <li key={key}>{numbers[0]*numbers[1]} &divide; {numbers[1]} {showAnswer ? (<div class='answer'>= {numbers[0]}</div>) : null}</li>
 );

 export const Equation = ({numbers, showAnswer = true, key}) =>  (
       <li key={key}>{numbers[0]===1 ? '' : numbers[0]}<i>x</i> + {numbers[1]} = {numbers[0]*numbers[2] + numbers[1]} {showAnswer ? (<div class='answer'><i>x</i> = {numbers[2]}</div>) : null}</li>
  );

 export const Question = ({topic, numbers, showAnswer, key}) => {
     const Question = topics[topic];
     return <Question  numbers={numbers} showAnswer={showAnswer} key ={key} />;
 };

const topics = {
    mult: Multiplication,
    div: Division,
    eqn: Equation
};

export const MultiplicationObjTest = {
 name: 'multiplication',
 mix() { return [ random(12), random(12) ] },
 component({x, y, showAnswer, key})  {
     <li key={key}>({x} &times; {y}) {showAnswer ? (<span>= {x*y}</span>) : null}</li>
  }
}

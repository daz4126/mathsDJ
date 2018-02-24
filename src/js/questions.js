import { h } from 'hyperapp'

export const Multiplication = ({numbers, showAnswer = true, key}) => (
    <li key={key}>{numbers[0]} &times; {numbers[1]} {showAnswer ? (<span>= {numbers[0]*numbers[1]}</span>) : null}</li>
 );

export const Division = ({numbers, showAnswer = true, key}) =>  (
      <li key={key}>{numbers[0]*numbers[1]} &divide; {numbers[1]} {showAnswer ? (<span>= {numbers[0]}</span>) : null}</li>
 );

 export const Question = ({topic, numbers, showAnswer, key}) => {
     const Question = topics[topic];
     return <Question  numbers={numbers} showAnswer={showAnswer} key ={key} />;
 }

const topics = {
    mult: Multiplication,
    div: Division
};

export const MultiplicationObjTest = {
 name: 'multiplication',
 mix() { return [ random(12), random(12) ] },
 component({x, y, showAnswer, key})  {
     <li key={key}>({x} &times; {y}) {showAnswer ? (<span>= {x*y}</span>) : null}</li>
  }
}

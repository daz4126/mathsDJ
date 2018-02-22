import { h } from 'hyperapp'

export const Multiplication = ({x, y, showAnswer = true, key}) => (
    <li key={key}>{x} &times; {y} {showAnswer ? (<span>= {x*y}</span>) : null}</li>
 );

export const Division = ({x, y, showAnswer = true, key}) =>  (
      <li key={key}>{x*y} &divide; {y} {showAnswer ? (<span>= {x}</span>) : null}</li>
 );

export const MultiplicationObjTest = {
 name: 'multiplication',
 mix() { return [ random(12), random(12) ] },
 component({x, y, showAnswer, key})  {
     <li key={key}>({x} &times; {y}) {showAnswer ? (<span>= {x*y}</span>) : null}</li>
  }
}

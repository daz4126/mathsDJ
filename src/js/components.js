import { h } from 'hyperapp'

export const Multiplication = ({x, y, showAnswer = true}) => (
    <li>{x} &times; {y} {showAnswer ? (<span>= {x*y}</span>) : null}</li>
 );

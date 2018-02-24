import { h } from 'hyperapp'
import { Multiplication, Division, Equation, Question, Topics } from './questions.js'


const view = (state, actions) => (
  <div id='root'>
  <header>
  <h1>Maths <strong>DJ</strong></h1>
  <button class="topic pure-button pure-button-primary" onclick={()=>actions.changeTopic('mult')}>Multiplication</button>
  <button class="topic pure-button pure-button-primary" onclick={()=>actions.changeTopic('div')}>Division</button>
  <button class="topic pure-button pure-button-primary" onclick={()=>actions.changeTopic('eqn')}>Equations</button>
  </header>
  <div class='main'>
    <button class="pure-button pure-button-primary" onclick={actions.mix}><i class="fa fa-sync-alt"></i>MIX</button>
    <button class="pure-button pure-button-primary" onclick={actions.toggleShowAnswer}>{state.showAnswer ? <i class="fa fa-eye-slash"></i>:<i class="fa fa-eye"></i>}{state.showAnswer ? 'Hide Answers':'Show Answers'}</button>

    <ol  id='questions'>
     {state.questions.map((numbers,i) => (
       <Question topic={state.topic} numbers={numbers} showAnswer={state.showAnswer} key={i} />
     ))}
    </ol>
  </div>
  <footer>
  <p>
  Made with <i class="fa fa-heart"></i> & Hyperapp
  </p>
  <p>
  <i class="fa fa-copyright"></i> Maths DJ 2018
  </p>
  </footer>
  </div>
)

export default view;

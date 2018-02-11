import { h } from 'hyperapp'
import { Multiplication } from './components.js'

export const view = (state, actions) => (
  <div id='root'>
  <header>
  <h1>Maths <strong>DJ</strong></h1>
  </header>
  <div class='main'>
    <button class="pure-button pure-button-primary" onclick={actions.createQuestions}><i class="fa fa-sync-alt"></i>MIX</button>
    <button class="pure-button pure-button-primary" onclick={actions.toggleShowAnswer}>{state.showAnswer ? <i class="fa fa-eye-slash"></i>:<i class="fa fa-eye"></i>}{state.showAnswer ? 'Hide Answers':'Show Answers'}</button>
    <ol>
     {state.questions.map(([x, y]) => (
       <Multiplication x={x} y={y} showAnswer={state.showAnswer} />
     ))}
    </ol>
  </div>
  <footer>
  <p>
  Made with <i class="fa fa-heart"></i> in Manchester
  </p>
  <p>
  <i class="fa fa-copyright"></i> Maths DJ 2018
  </p>
  </footer>
  </div>
)

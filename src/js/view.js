import { h } from 'hyperapp'
import { Question } from './components.js'
import topics from './topics.js'


const view = (state, actions) => (
  <div id='root'>
  { !state.fullScreen ?
  <header>
  <h1>Maths <strong>DJ</strong></h1>
  <div  id='topics'>
   {
     Object.entries(topics).map( ([key,topic]) =>
     <button class="topic" onclick={()=>actions.changeTopic(key)}>{topic.name}</button>
   )
   }
  </div>
  </header>
  : '' }
  <div class='main'>
    { state.topic ?
    <div>
    <div class='actions'>
      <button onclick={ actions.mix }><i class="fas fa-sync-alt"></i>MIX</button>
      <button onclick={actions.toggleShowAnswer}>{state.showAnswer ? <i class="fas fa-eye-slash"></i>:<i class="fas fa-eye"></i>}{state.showAnswer ? 'Hide Answers':'Show Answers'}</button>
      <button onclick={actions.toggleFullScreen}>{state.fullScreen ? 'Close Full Screen':'Full Screen'}</button>
      <button onclick={() => window.print()}><i class="fas fa-print"></i>Print</button>
    </div>
    <h1>{ topics[state.topic].name }</h1>
    <ol  id='questions'>
     {state.questions.map((numbers,i) => (
       <Question topic={state.topic} numbers={numbers} showAnswer={state.showAnswer} key={i} />
     ))}
    </ol>
    </div>
    : <div>
      <h1>Welcome to Maths DJ!</h1>
      <p>Maths DJ makes it easy to generate questions and answers from a variety of mathematical topics.</p>
      <strong>Choose a topic from the list above to get started!</strong>
      </div>
     }
  </div>
  { !state.fullScreen ?
  <footer>
  <h2>Instructions:</h2>
  <ul>
  <li>Select a topic from the list at the top of the page.</li>
  <li>Press the MIX button to generage a new set of questions.</li>
  <li>Click on Show Answers to see the answer to each question.</li>
  <li>Press Full Screen to hide the header, footer and all clutter</li>
  <li>Click on Print to print out the questions as a worksheet.</li>
  </ul>
  <p>
  Made in Manchester with <a href='http://hyperapp.js.org'>Hyperapp</a>
  </p>
  <p>
  <i class="fab fa-twitter"></i><a href='http://twitter.com/mathsdj'>@mathsDJ</a> on Twitter
  </p>
  <p>
  &copy; MathsDJ 2018
  </p>
  </footer>
  : '' }
  </div>
)

export default view;

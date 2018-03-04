import { h } from 'hyperapp'
import { Question } from './components.js'
import topics from './topics.js'


const view = (state, actions) => (
  <div id='root'>
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
  <div class='main'>
    <button onclick={ actions.mix }><i class="fa fa-sync-alt"></i>MIX</button>
    <button onclick={actions.toggleShowAnswer}>{state.showAnswer ? <i class="fa fa-eye-slash"></i>:<i class="fa fa-eye"></i>}{state.showAnswer ? 'Hide Answers':'Show Answers'}</button>

    <ol  id='questions'>
     {state.questions.map((numbers,i) => (
       <Question topic={state.topic} numbers={numbers} showAnswer={state.showAnswer} key={i} />
     ))}
    </ol>
  </div>
  <footer>
  <p>
  Made in Manchester with <i class="fa fa-heart"></i> & Hyperapp
  </p>
  <p>
  <i class="fa fa-copyright"></i> Maths DJ 2018
  </p>
  </footer>
  </div>
)

export default view;

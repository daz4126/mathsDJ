import { uuid, createRandomQuestions } from './utils.js'

const actions = {
  mix: () => state => ({
    questions: createRandomQuestions()
  }),
  toggleShowAnswer: () => state => ({
    showAnswer: !state.showAnswer
  }),
  mathJaxify: () => (state, actions) => {
  console.log('mathjaxifying')
  //MathJax.Hub.Queue(["Typeset",MathJax.Hub])
},
  changeTopic: topic => ({ topic: topic })
};

export default actions;

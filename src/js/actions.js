import { uuid, createRandomQuestions } from './utils.js'

const actions = {
  createQuestions: () => state => ({
    questions: createRandomQuestions()
  }),
  toggleShowAnswer: () => state => ({
    showAnswer: !state.showAnswer
  }),
  mathJaxify: () => (state, actions) => {
  console.log('mathjaxifying')
  //MathJax.Hub.Queue(["Typeset",MathJax.Hub])
},
  changeQuestionsTo: () => alert('changeQuestionsTo')
};

export default actions;

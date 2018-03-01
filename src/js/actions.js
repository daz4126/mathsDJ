import { uuid, mix } from './utils.js'

const actions = {
  mix: (topic) => state => ({
    questions: mix(topic)
  }),
  toggleShowAnswer: () => state => ({
    showAnswer: !state.showAnswer
  }),
  mathJaxify: () => (state, actions) => {
  console.log('mathjaxifying')
  //MathJax.Hub.Queue(["Typeset",MathJax.Hub])
},
  changeTopic: (topic) => state => ({
    questions: mix(topic),
    topic: topic
  })
};

export default actions;

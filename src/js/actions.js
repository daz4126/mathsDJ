import { uuid, mix } from './utils.js'

const actions = {
  mix: () => state => ({
    questions: mix(state.topic,state.numberOfQuestions)
  }),
  toggleShowAnswer: () => state => ({
    showAnswer: !state.showAnswer
  }),
  toggleFullScreen: () => state => ({
    fullScreen: !state.fullScreen
  }),
  mathJaxify: () => (state, actions) => {
  console.log('mathjaxifying')
  //MathJax.Hub.Queue(["Typeset",MathJax.Hub])
},
  changeTopic: (topic) => state => ({
    questions: mix(topic,state.numberOfQuestions),
    topic: topic
  })
};

export default actions;

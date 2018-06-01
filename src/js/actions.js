import { mix } from './utils.js'
import topics from './topics.js'

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
  addTopic: topic => state => ({
    topics: state.topics.concat(
      {
        key: topic,
        questions: mix(topic,state.numberOfQuestions)
      }
      )
  }),
  fontSizeDown: n => state => ({ fontSize: state.fontSize - n }),
  fontSizeUp: n => state => ({ fontSize: state.fontSize + n }),
  removeQuestion: () => state => ({
    numberOfQuestions: state.numberOfQuestions - 1,
    questions: mix(state.topic,state.numberOfQuestions - 1)
  }),
  addQuestion: () => state => ({
    numberOfQuestions: state.numberOfQuestions + 1,
    questions: mix(state.topic,state.numberOfQuestions + 1)
  })
};

export default actions;

import { mix } from './utils.js'
import topics from './topics.js'

const actions = {
  mix: () => state => ({
      topics: state.topics.map(
        topic => (Object.assign({}, topic, { questions: mix(topic.id,state.numberOfQuestions) }))
      )
    })
    ,
  toggleShowAnswer: () => state => ({
    showAnswer: !state.showAnswer
  }),
  toggleFullScreen: () => state => ({
    fullScreen: !state.fullScreen
  }),
  addTopic: topic => state => ({
    topics: state.topics.concat(
      {
        key: topic+Date.now(),
        id: topic,
        questions: mix(topic,state.numberOfQuestions)
      }
      )
  }),
  removeTopic: key => state => ({topics: state.topics.filter(
    topic => topic.key !== key)
  }),
  fontSizeDown: n => state => ({ fontSize: state.fontSize - n }),
  fontSizeUp: n => state => ({ fontSize: state.fontSize + n }),
  removeQuestion: () => state => ({
    numberOfQuestions: state.numberOfQuestions - 1,
    topics: state.topics.map(
      topic => (Object.assign({}, topic, { questions: mix(topic.id,state.numberOfQuestions -1) }))
    )
  }),
  addQuestion: () => state => ({
    numberOfQuestions: state.numberOfQuestions + 1,
    topics: state.topics.map(
      topic => (Object.assign({}, topic, { questions: mix(topic.id,state.numberOfQuestions + 1) }))
    )
  })
};

export default actions;

import { mix } from './utils.js'

const state = {
  fullScreen: false,
  topic: null,
  numberOfQuestions: 5,
  fontSize: 24,
  questions: mix('mult',5),
  showAnswer: false,
}

export default state;

import { mix } from './utils.js'

const state = {
  fullScreen: false,
  topic: null,
  numberOfQuestions: 8,
  questions: mix('mult',5),
  showAnswer: false,
}

export default state;

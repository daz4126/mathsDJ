import { mix } from './utils.js'

const state = {
  topic: 'mult',
  numberOfQuestions: 5,
  questions: mix('mult',5),
  showAnswer: false,
}

export default state;

import { createRandomQuestions } from './utils.js'

const state = {
  topic: 'mult',
  questions: createRandomQuestions(),
  showAnswer: false,
}

export default state;

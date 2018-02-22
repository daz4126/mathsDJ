import { createRandomQuestions } from './utils.js'

const state = {
  questionType: 'Multiplication',
  questions: createRandomQuestions(),
  showAnswer: false,
}

export default state;

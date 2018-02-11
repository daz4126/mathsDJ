import { createRandomQuestions } from './utils.js'

export const state = {
  questions: createRandomQuestions(),
  showAnswer: false
}

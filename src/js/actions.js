import { createRandomQuestions } from './utils.js'

export const actions = {
  createQuestions: () => state => ({
    questions: createRandomQuestions()
  }),
  toggleShowAnswer: () => state => ({
    showAnswer: !state.showAnswer
  })
};

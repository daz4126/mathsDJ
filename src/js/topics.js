
import { Multiplication, Division, Equation, Percent, Brackets } from './components.js'

const topics = {
    mult: {
      name: 'Multiplication',
      intro: 'Evaluate',
      component: Multiplication,
      numbers: [[-12,12],[-12,12]]
    },
    div: {
      name: 'Division',
      intro: 'Evaluate',
      component: Division,
      numbers: [[1,12],[1,12]]
    },
    eqn: {
      name: 'Equations',
      intro: 'Solve the following equations:',
      component: Equation,
      numbers: [[1,12],[1,12],[1,12],[-1,1]]
    },
    percent: {
      name: 'Percentages',
      intro: 'Find the answer to the following questions:',
      component: Percent,
      numbers: [[1,20],[1,12]]
    },
    multdec: {
      name: 'Multiplying Decimals',
      intro: 'Evaluate',
      component: Multiplication,
      numbers: [[1,12],[1,12],[-3,3],[-3,3]]
    },
    brackets: {
      name: 'Expanding Brackets',
      intro: 'Expand the following brackets:',
      component: Brackets,
      numbers: [[2,12],[1,12],[-12,12]]
    }
};

export default topics;

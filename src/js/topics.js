
import { Multiplication, Division, Equation, Percent, Brackets } from './components.js'

const topics = {
    mult: {
      name: 'Multiplication',
      component: Multiplication,
      numbers: [12,12]
    },
    div: {
      name: 'Division',
      component: Division,
      numbers: [12,12]
    },
    eqn: {
      name: 'Equations',
      component: Equation,
      numbers: [12,12,12,2]
    },
    percent: {
      name: 'Percentages',
      component: Percent,
      numbers: [20,12]
    },
    multdec: {
      name: 'Multiplying Decimals',
      component: Multiplication,
      numbers: [12,12,6,6]
    },
    brackets: {
      name: 'Expanding Brackets',
      component: Brackets,
      numbers: [11,12,12,2]
    }
};

export default topics;

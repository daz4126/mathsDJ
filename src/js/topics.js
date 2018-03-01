
import { Multiplication, Division, Equation, Percent, MultDec } from './components.js'

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
      numbers: [12,12,12]
    },
    percent: {
      name: 'Percentages',
      component: Percent,
      numbers: [20,12]
    },
    multdec: {
      name: 'Multiplying Decimals',
      component: MultDec,
      numbers: [12,6,12,6]
    }
};

export default topics;

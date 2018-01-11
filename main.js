// Add test data here that will eventually be delivered as JSON from selections
const DATA = {};

// consider using lodash eventually
function random(a,b) {
  if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
  return Math.floor((b-a+1) * Math.random()) + a;
}

const Header = props => {
  const styles = {
    color: '#AD5D5D',
    backgroundColor: '#223A5E',
    fontFamily: 'sans-serif',
    fontSize: 72,
    padding: 0,
    margin: 0
  };
  return (
    <h1 style={styles}>Maths DJ</h1>
  );
}

const Equation = props => {
    const r = Math.random();
    const c = r < 0.5 ? props.a * props.x + props.b : props.a * props.x - props.b;

    const sign = r < 0.5 ? '+':'-';
    return (
      <li>
        <p class='question'>Solve \({props.a===1 ? '': props.a}x {sign} {props.b} = {c}\)</p>
        <p>Answer: \(x = {props.x}\)</p>
      </li>
    );
};
// To be swapped into Equation for answers
//<p>Answer: \(x = {props.x}\)</p>
// for use in test styles
// <p class='answer'>\(x\)...............................</p>


const questions = [];

for(let i = 0; i < 10; i ++) {
  const a = random(10);
  const b = random(10);
  const x = random(-10,10);
  questions.push(<Equation a={a} b={b} x={x} n={i+1} />);
}

const App = () => {
  return (
    <div>
      <Header />
      <ol class='worksheet'>
        { questions }
      </ol>
    </div>
  )
}

ReactDOM.render(
   <App data={DATA} />,
   document.getElementById('root'));

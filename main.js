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
    const styles = {
      color: '#696969',
      fontFamily: 'serif',
    };
    const solution = props.a * props.x + props.b;
    return (
      <h1 style={styles}>{props.a}<em>x</em> + {props.b} = {solution}, <em>x</em> = {props.x}</h1>
    );
};

const questions = [];

for(let i = 0; i < 10; i ++) {
  const a = random(10);
  const b = random(10);
  const x = random(20) - 10;
  questions.push(<Equation a={a} b={b} x={x} />);
}

const App = () => {
  return (
    <div>
      <Header />
      <div>
        { questions }
      </div>
    </div>
  )
}

ReactDOM.render(
   <App data={DATA} />,
   document.getElementById('root'));

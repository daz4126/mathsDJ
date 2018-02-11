function random(a,b) {
  if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
  return Math.floor((b-a+1) * Math.random()) + a;
}
export const createRandomQuestions = () => Array.from({length: 10}).map(() => [random(1, 10), random(1, 10)]);

import topics from './topics.js'

const random = (a,b,c=true) => {
  if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
  const n = Math.floor((b-a+1) * Math.random()) + a;
  return n
}

export const mix = (topic,n) => Array.from({length: n}).map(() => topics[topic].numbers.map( x => random(x))) ;

export const coeff = a => a === 1 ?  '' : a

export const plusorminus = n => n === 1 ? '+' : '-'

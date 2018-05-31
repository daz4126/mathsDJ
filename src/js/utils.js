import topics from './topics.js'

const random = (a,b,c=true) => {
  if (b === undefined) b = a, a = 1; // if only one argument is supplied, assume the lower limit is 1
  const n = Math.floor((b-a+1) * Math.random()) + a;
  return n
}

const randy = ([a,b],zero=true) => {
  const n = Math.floor((b-a+1) * Math.random()) + a;
  if(zero && n===0){
    return randy([a,b],zero);
  } else {
    return n;
  }
}

export const mix = (topic,n) => Array.from({length: n}).map(() => topics[topic].numbers.map( x => randy(x))) ;

export const coeff = a => a === 1 ?  '' : a

export const plusorminus = n => n > 0 ? '+' : '-'

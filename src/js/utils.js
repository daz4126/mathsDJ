import topics from './topics.js'

const random = ([a,b],zero=true) => {
  const n = Math.floor((b-a+1) * Math.random()) + a;
  if(zero && n===0){
    return random([a,b],zero);
  } else {
    return n;
  }
}

export const mix = (topic,n) => Array.from({length: n}).map(() => topics[topic].numbers.map( x => random(x))) ;

export const coeff = a => a === 1 ?  '' : a

export const plusorminus = n => n > 0 ? '+' : '-'

'use strict';

let _ = require('lodash');
let fs = require('fs');

let changes = fs.readFileSync('day1/day1.txt', { encoding: 'utf8' });

changes = changes.split('\n').map(i => parseInt(i));

// remove last changes entry if it was an empty line
if (isNaN(changes[changes.length - 1])) {
  changes.pop();
}

function findRepeat(list) {
  let freqs = { 0: true };
  let current = 0;
  let repeat = null;

  while(repeat === null) {
    for (let i of list) {
      current += i;
      if (freqs[current]) {
        repeat = current;
        break;
      } else {
        freqs[current] = true;
      }
    }
  }

  return repeat;
}

console.log('Day 1a: ', _.sum(changes));
console.log('Day 1b: ', findRepeat(changes));

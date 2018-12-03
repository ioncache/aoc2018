'use strict';

let _ = require('lodash');
let fs = require('fs');

let boxIds = fs.readFileSync('day2/day2.txt', { encoding: 'utf8' });
boxIds = boxIds.split('\n');

// remove last boxIds entry if it was an empty line
if (!boxIds[boxIds.length - 1]) {
  boxIds.pop();
}

// 2a

let twos = 0;
let threes = 0;

for (let id of boxIds) {
    let counts = _.countBy(id);

    if (Object.keys(_.countBy(counts, i => i === 3)).length > 1) {
      threes += 1;
    }

    if (Object.keys(_.countBy(counts, i => i === 2)).length > 1) {
      twos += 1;
    }
}


// 2b

let match;

function cmp(a, b) {
	let matches = [];
  for (let i = 0; i < a.length; i++) {
  	if (a.substring(i, i+ 1) !== b.substring(i, i + 1)) {
    	matches.push(i);
    }
  }

  return matches;
}

for (let i = 0; i < boxIds.length -1; i++) {
	for (let j = i + 1; j < boxIds.length; j++) {
  	let diff = cmp(boxIds[i], boxIds[j]);

    if (diff.length === 1) {
    	match = boxIds[i].slice(0, diff[0]) + boxIds[i].slice(diff[0] + 1);
      break;
    }
  }
  if (match) {
  	break;
  }
}

console.log('Day 2a: ', twos * threes);
console.log('Day 2b: ', match);

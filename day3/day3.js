'use strict';

let _ = require('lodash');
let fs = require('fs');

let claims = fs.readFileSync('day3/day3.txt', { encoding: 'utf8' });

claims = claims.split('\n');

// remove last changes entry if it was an empty line
if (!claims[claims.length - 1]) {
  claims.pop();
}

let claimFormatter = /^.*@ (\d+),(\d+): (\d+)x(\d+)$/;
claims = claims.map(claim => claimFormatter.exec(claim).slice(1));

// make some empty fabric

let fabric = [];

for (let i = 0; i < 1000; i++) {
	let row = [];
  for (let j = 0; j < 1000; j++) {
  	row.push('.');
  }
  fabric.push(row);
}

// fill the fabric with elf claims

for (let claim of claims) {
	for (let y = claim[1]; y < claim[1] + claim[3]; y++) {
  	for (let x = claim[0]; x < claim[0] + claim[2]; x++) {
    	if (fabric[y][x] === '.') {
      	fabric[y][x]= 'O';
      } else {
      	fabric[y][x] = 'X';
      }
    }
  }
}

console.log(fabric)

console.log('Day 3a:');
console.log('Day 3b:');

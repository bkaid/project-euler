'use strict';
const utopianTree = require('./utopian-tree');

console.log('The Utopian Tree goes through 2 cycles of growth every year. Each spring, it doubles in height. Each summer, its height increases by 1 meter. Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. How tall will her tree be after N growth cycles?');

let input = 
`3
0
1
4`.split('\n');

let testCaseCount = parseInt(input.shift());
for(let i = 0; i < testCaseCount; i++) {
  let cycles = Number(input.shift());
  let height = utopianTree.getHeight(cycles);
  console.log(height);
}

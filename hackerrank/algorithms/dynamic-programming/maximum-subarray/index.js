'use strict';
require('./max-subarray');

let input =
`2 
4
1 2 3 4
6
2 -1 2 3 4 -5`;

input = input.split('\n');
let testCaseCount = parseInt(input.shift());
for (let i = 0; i < testCaseCount; i++) {
  input.shift();
  let array = input.shift().split(' ').map(Number);
  let maxContiguous = array.maxSubArray();
  let maxNonContiguous = array.maxSubArrayNonContigious();
  console.log(`${maxContiguous} ${maxNonContiguous}`);
}

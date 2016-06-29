'use strict';
const fs = require('fs');
const problem18 = require('../problem-0018/problem-0018');

console.time('Elapsed Time');

let input = fs.readFileSync(__dirname + '/p067_triangle.txt', 'utf-8');
let triangle = input.split('\n').map(line => line.trim().split(' ').map(Number));

let result = problem18.maximumPathSum(triangle);
console.log(`Find the maximum total from top to bottom of the triangle below:\n${input}`);
console.log(`${result}`);
console.timeEnd('Elapsed Time');
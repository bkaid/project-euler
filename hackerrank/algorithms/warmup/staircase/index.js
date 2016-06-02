'use strict';

let n = 6;

console.log('Your teacher has given you the task of drawing a staircase structure. Being an expert programmer, you decided to make a program to draw it for you instead. Given the required height, can you print a staircase as shown in the example?');
for(let i = 1; i <= n; i++) {
  console.log(`${' '.repeat(n - i)}${'#'.repeat(i)}`);
}
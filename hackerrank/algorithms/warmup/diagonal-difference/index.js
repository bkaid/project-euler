'use strict';

let input = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];
let sum = 0;
input.forEach((row, i) => {
  sum = sum + row[i] - row[row.length - i - 1];
});
let result = Math.abs(sum);

console.log('Given a square matrix of size N x N, calculate the absolute difference between the sums of its diagonals.');
console.log(`Result: ${result}`);

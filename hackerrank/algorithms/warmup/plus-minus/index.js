'use strict';

let input = [-4, 3, -9, 0, 4, 1];
let n = input.length;

let positive = (input.filter(value => value > 0).length / n).toFixed(6);
let negative = (input.filter(value => value < 0).length / n).toFixed(6);
let zero = (input.filter(value => value === 0).length / n).toFixed(6);

console.log('Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line.');
console.log(`Input: ${input}`);
console.log(positive);
console.log(negative);
console.log(zero);

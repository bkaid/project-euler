'use strict';
const isFunny = require('./funnyString');

let input =
`2
acxz
bcxz`;

input.split('\n').slice(1).forEach(line => {
  console.log(isFunny(line) ? 'Funny' : 'Not Funny');
});

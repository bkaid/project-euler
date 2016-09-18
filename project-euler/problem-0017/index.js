'use strict';
const problem17 = require('./problem-0017');

let result = 0;
for (let i = 1; i <= 1000; i++) {
  result += problem17.toWords(i).replace(/\W+/g, '').length;
}
console.log('If all the numbers from 1 to 1000 (one thousand) inclusive were written out in words, how many letters would be used?');
console.log(`${result}`);

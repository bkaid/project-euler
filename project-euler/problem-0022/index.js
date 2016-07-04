'use strict';
const fs = require('fs');
const problem22 = require('./problem-0022');

let names = fs.readFileSync(__dirname + '/p022_names.txt', 'utf-8')
              .replace(/^"|"$/g, '')
              .split('","');

console.time('Elapsed Time');

let result = problem22.namesScore(names);
console.log('What is the total of all the name scores in the file?');
console.log(`${result}`);
console.timeEnd('Elapsed Time');
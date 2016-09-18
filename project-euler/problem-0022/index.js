'use strict';
const fs = require('fs');
const path = require('path');
const problem22 = require('./problem-0022');

let names =
  fs.readFileSync(path.join(__dirname, '/p022_names.txt'), 'utf-8')
    .replace(/^"|"$/g, '')
    .split('","');

let result = problem22.namesScore(names);
console.log('What is the total of all the name scores in the file?');
console.log(`${result}`);

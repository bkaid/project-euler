'use strict';
const fs = require('fs');
const path = require('path');
const problem22 = require('./problem-0022');

let names =
  fs.readFileSync(path.join(__dirname, '/p022_names.txt'), 'utf-8')
    .replace(/^"|"$/g, '')
    .split('","');

module.exports = {
  description: 'What is the total of all the name scores in the file?',
  result: () => problem22.namesScore(names)
};

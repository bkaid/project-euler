'use strict';
const fs = require('fs');
const path = require('path');
const problem42 = require('./problem-0042');

let words =
  fs.readFileSync(path.join(__dirname, '/p042_words.txt'), 'utf-8')
    .replace(/^"|"$/g, '')
    .split('","');

module.exports = {
  description: `How many are triangle words?`,
  result: () => problem42.triangleWords(words).length
};

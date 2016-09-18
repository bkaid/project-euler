let problemNumber = ('0000' + process.argv[2]).slice(-4);
console.log(`Project Euler #${problemNumber}`);
console.time('Elapsed Time');
require('./problem-' + problemNumber);
console.timeEnd('Elapsed Time');

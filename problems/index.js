let problemNumber = ('0000' + process.argv[2]).slice(-4);
const problem = require('./problem-' + problemNumber);

console.log(`Project Euler #${problemNumber}`);
console.log(problem.description);
console.time('Elapsed Time');
console.log(`Result: ${problem.result()}`);
console.timeEnd('Elapsed Time');
process.exit();

console.log('A Discrete Mathematics professor has a class of N students. Frustrated with their lack of discipline, he decides to cancel class if fewer than K students are present when class starts. Given the arrival time of each student, determine if the class is canceled.');

let input = 
`2
4 3
-1 -3 4 2
4 2
0 -1 2 1`.split('\n');

let testCaseCount = parseInt(input.shift());
for(let i = 0; i < testCaseCount; i++) {
  let row = input.shift().split(' ').map(Number);
  let cancellationThreshold = row[1];
  row = input.shift().split(' ').map(Number);
  let onTimeCount = row.reduce((previous, current) => previous + (current <= 0 ? 1 : 0), 0);
  console.log(onTimeCount >= cancellationThreshold ? 'NO' : 'YES');
}

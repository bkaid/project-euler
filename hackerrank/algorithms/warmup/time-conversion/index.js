'use strict';

let input = '07:05:45PM';

let time = input.replace(/(A|PM)/, ' $1');
let date = new Date('1/1/0 ' + time);
let hours = ('0' + date.getHours()).slice(-2);
let minutes = ('0' + date.getMinutes()).slice(-2);
let seconds = ('0' + date.getSeconds()).slice(-2);

console.log('Given a time in AM/PM format, convert it to military (-hour) time.');
console.log(`Input: ${input}`);
console.log(`Result: ${hours}:${minutes}:${seconds}`);
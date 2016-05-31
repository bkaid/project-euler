See [https://projecteuler.net/problem=1]()

Run: `node project-euler/problem-0001`

This problem at first seemed easy. It could be brute-forced with *O(n)* by looping through each number and checking the modulo of 3 or 5 and summing appropriately:

```js
let below = 1000;
let result = 0;
for (let i = 0; i < below; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
      result += i;
  }
}
console.log(result);
```

I then tried to submit it to [HackerRank](https://www.hackerrank.com/contests/projecteuler/challenges/euler001) which checks it against much higher input values. With an input of somewhere around `1000000000` the program takes too long to compute.  This led to looking for a solution closer to *O(1)* and researching what mathematical solution could help. If you take each number divisible by 3 (3,6,9,12...999) and divide each by 3 you get: 1,2,3,4...333 which led me to a formula for [summing of integers 1 to N](https://en.wikipedia.org/wiki/1_%2B_2_%2B_3_%2B_4_%2B_%E2%8B%AF) which says that sum of numbers 1 to n is equal to n(n+1)/2:

![](https://upload.wikimedia.org/math/6/8/8/6885cb69d413dba32d90d2b9db54299f.png)

You can calculate it for 3 and 5, add them together, and then substract the result of 15 to avoid double counting a number. This fixed the time issues but then exceeded the maximum value of an integer in javascript (`Number.MAX_SAFE_INTEGER`) and precision was lost.  The final solution used [bignumber.js](https://github.com/MikeMcl/bignumber.js/) to avoid precision loss.


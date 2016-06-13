'use strict';

/**
 * Returns the smallest number that can be divided by each of the numbers from
 * 1 to n without any remaider
 * @param {Number} n Max divisor to check for
 * @returns {Number}
 */
exports.smallestMultiple = (n) => {
  // 1: get all prime numbers
  let products = [];
  for (let i = 2; i <= n; i++) {
    if (exports.isPrime(i)) {
      products.push(i);
    }
  }

  // 2: raise primes to its max power where result is less than n
  products.forEach((prime, i) => {
    let raised = prime;
    while (raised * prime <= n) {
      raised *= prime;
      products[i] = raised;
    }
  }); 

  // 3: multiply products
  let result = products.reduce((previous, current) => previous * current, 1);
  return result;
};

/** 
 * Returns true if a number is prime
 * @param {Number} number
 * @returns {Boolean}
 */
exports.isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  let sqrt = Math.sqrt(number);
  let divisor = 2;

  // per problem 3, only need to check if prime up to its square root
  while (number % divisor !== 0 && divisor <= sqrt) {
    // increase by 2 to skip all even numbers
    divisor += divisor > 2 ? 2 : 1;
  }
  
  return divisor > sqrt;
};
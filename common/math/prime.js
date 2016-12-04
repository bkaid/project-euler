'use strict';

/**
 * Returns true if a number is prime
 * @param {Number} number
 * @returns {Boolean}
 */
exports.isPrime = number => {
  if (number <= 1) {
    return false;
  }

  let sqrt = Math.sqrt(number);
  let divisor = 2;

  // only need to search for prime numbers up to the square root of the value.
  // if a number is not prime, it can be factored into two factors, a * b.
  // if a and b were both greater than the square root of the number, a * b
  // would be greater than the value so at least one of its factors must be less.
  while (number % divisor !== 0 && divisor <= sqrt) {
    // increase by 2 to skip all even numbers
    divisor += divisor > 2 ? 2 : 1;
  }

  return divisor > sqrt;
};

/**
 * Calculates the prime factorization of a number
 * @param {Number} value
 * @returns {{base: number, exponent: number}[]}
 */
exports.primeFactorization = value => {
  let primeFactorization = [];
  let lookForFactors = value > 1;

  // compute the prime factorization (primes and their powers)
  while (lookForFactors) {
    let exponent = 0;
    let divisor = 2;
    let sqrt = Math.sqrt(value);

    // only need to check if prime up to its square root
    while (value % divisor !== 0 && divisor <= sqrt) {
      // increase by 2 to skip all even numbers
      divisor += divisor > 2 ? 2 : 1;
    }

    while (value % divisor === 0) {
      exponent++;
      value /= divisor;
    }

    lookForFactors = value >= divisor && divisor <= sqrt;

    if (!lookForFactors) {
      exponent = exponent || 1;
      divisor = Math.max(value, divisor);
    }

    primeFactorization.push({ base: divisor, exponent: exponent });
  }

  return primeFactorization;
};

/**
 * Sieve of Eratosthenes to generate primes up to a max number
 * @param {Number} min
 * @param {Number} max
 * @returns {Number[]}
 */
exports.getPrimes = (min, max) => {
  // only need to search up to the square root of the max value
  let sqrt = Math.sqrt(max);

  // start by marking all numbers as true
  let sieve = new Array(max).fill(true);

  // skip non-primes 0 and 1
  sieve[0] = false;
  sieve[1] = false;

  for (let i = 2; i <= sqrt; i++) {
    if (sieve[i]) {
      // eliminate all multiples of i
      for (let j = i * i; j <= max; j += i) {
        sieve[j] = false;
      }
    }
  }

  // use reduce to combine map and filter operations to return primes from sieve
  return sieve.reduce((primes, isPrime, index) => {
    if (isPrime && index >= min) {
      primes.push(index);
    }
    return primes;
  }, []);
};

/**
 * Segmented prime sieve to reduce memory consumption for large prime ranges
 * @param {Number} min
 * @param {Number} max
 * @returns {Number[]}
 */
exports.segmentedSieve = (min, max) => {
  // Compute all primes smaller than or equal to square root of max using simple sieve
  let segmentSize = Math.floor(Math.sqrt(max)) + 1;
  let primes = exports.getPrimes(0, segmentSize);
  let results = primes.filter(p => p >= min);

  // divide the range min...max in segments of size sqrt(max)
  let segmentMin = Math.max(segmentSize, Math.floor(min / segmentSize) * segmentSize);
  let segmentMax = segmentMin + segmentSize;

  // While all segments of are not processed, process one segment at a time
  while (segmentMin < max) {
    let segment = new Array(segmentSize + 1).fill(true);

    // Use the found primes by up to sqrt n to find primes in current segment range
    for (let i = 0; i < primes.length; i++) {
      // Find the minimum number in [segmentMin..segmentMax] that is
      // a multiple of primes[i]
      // For example, if segmentMin is 31 and primes[i] is 3,
      // we start with 33.
      let lowLimit = Math.floor(segmentMin / primes[i]) * primes[i];
      if (lowLimit < segmentMin) {
        lowLimit += primes[i];
      }

      /*  Mark multiples of primes[i] in [segmentMin..segmentMax]:
          We are marking j - segmentMin for j, i.e. each number
          in range [segmentMin..segmentMax] is mapped to [0, segmentMax-segmentMin]
          so if range is [50, 100]  marking 50 corresponds
          to marking 0, marking 51 corresponds to 1 and
          so on. In this way we need to allocate space only
          for range  */
      for (let j = lowLimit; j < segmentMax; j += primes[i]) {
        segment[j - segmentMin] = false;
      }
    }

    // Numbers which are not marked as false are prime
    for (let i = segmentMin; i < segmentMax; i++) {
      if (i >= min && i <= max && segment[i - segmentMin] === true) {
        results.push(i);
      }
    }

    // Move to next segment
    segmentMin += segmentSize;
    segmentMax += segmentSize;
    if (segmentMax >= max) {
      segmentMax = max;
    }
  }

  return results;
};

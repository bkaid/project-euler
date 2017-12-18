'use strict';

let i = 0;
let collatzChainCache = [0, 1];
let maxChain = [1];
let maxChainLength = 1;

/**
 * Finds the longest Collatz chain for a number below n
 * @param {Number} n
 * @returns {Number}
 */
exports.longestCollatzChain = n => {
  while (i <= n) {
    if (!collatzChainCache[i]) {
      let sequence = i;
      let chainLength = 0;

      // stop once once sequence is down to 1 or we've seen the sequence before
      while (sequence > 1 && sequence >= i) {
        if (sequence % 2) {
          sequence = (sequence * 3) + 1;
        } else {
          sequence /= 2;
        }
        chainLength++;
      }

      // add previously seen sequence's length and cache result
      collatzChainCache[i] = chainLength + collatzChainCache[sequence];
    }

    if (collatzChainCache[i] >= maxChainLength) {
      maxChainLength = collatzChainCache[i];
      maxChain.push(i);
    }

    i++;
  }

  return maxChain.reduce((previous, current) => current <= n ? current : previous, 0);
};

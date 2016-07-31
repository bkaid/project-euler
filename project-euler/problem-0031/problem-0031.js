'use strict';

/**
 * Calculate the number of ways change can be made for N given a list of coin values
 * Assumes an infinite supply of each coin denomination.
 * Uses a bottom up dynamic prograaming algorithm that builds up a tabulation for 0-N.
 * @param {Number[]} coins The values of coins that can be used to make change
 * @param {Number} n The amount to make change for
 * @returns {Number}
 */
exports.coinChangePermutations = (coins, n) => {
  let permutations = new Array(n + 1).fill(0);

  // one way to make change for 0
  permutations[0] = 1;

  // loop over each coin bottom up
  for(let coinIndex = 0; coinIndex < coins.length; coinIndex++) {
    // calculate change for coin value to n for coin
    for(let i = coins[coinIndex]; i <= n; i++) {
      // # of combinations is equal to looking up i - current coins value, added to the existing value for i
      permutations[i] += permutations[i - coins[coinIndex]];
    }
  }

  // return the value for n
  return permutations[n];
};

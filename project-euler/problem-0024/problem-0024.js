'use strict';

function arraySwap(array, left, right) {
  let temp = array[right];
  array[right] = array[left];
  array[left] = temp;
}

/**
 * Finds the next lexicographic permutation of an array
 * Based on algoritm from: https://en.wikipedia.org/wiki/Permutation#Generation_in_lexicographic_order
 * @param {Object[]} array
 * @returns {Object[]}
 */
exports.nextLexicographicPermutation = (array) => {
  // The following algorithm generates the next permutation lexicographically after a given permutation. It changes the given permutation in-place.

  // Find the largest index k such that a[k] < a[k + 1].
  let k = array.length - 2;
  while (k > 0 && array[k] >= array[k + 1]) {
    k--;
  }

  // Find the largest index l greater than k such that a[k] < a[l].
  let l = array.length - 1;
  while (array[l] <= array[k]) {
    l--;
  }

  // If no such index exists, the permutation is the last permutation.
  if (l < 0) {
    return null;
  }

  // Swap the value of a[k] with that of a[l].
  arraySwap(array, l, k);

  // Reverse the sequence from a[k + 1] up to and including the final element a[n].
  k++;
  l = array.length - 1; 
  while (k < l) {
    arraySwap(array, l, k);
    k++;
    l--;
  }

  return array;
};

/**
 * Finds the Nth lexicographic permutation of an array
 * @param {Object[]} array
 * @param {Number} n
 * @returns {Object[]}
 */
exports.nthLexicographicPermutation = (array, n) => {
  array.sort();

  let count = 1;
  while (count < n) {
    exports.nextLexicographicPermutation(array);
    count++;
  }

  return array;
};

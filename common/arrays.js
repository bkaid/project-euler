'use strict';
const factorial = require('./math/factorial').factorial;

/**
 * Get k-sized combinations of elements from an array
 * @param {Number} size Size of combinations to get
 * @returns {Array} An array of combinations
 */
Array.prototype.combinations = function (size) {
  if (size > this.length) {
    return [];
  }

  if (!size) {
    return [[]];
  }

  if (size === this.length) {
    return [this];
  }

  return this.reduce(function (previous, current, index, array) {
    return previous.concat(
      array.slice(index + 1).combinations(size - 1)
        .map(combination => [current].concat(combination)));
  }, []);
};

/**
 * Deep compares two arrays
 * @param {Array} array Array to compare
 * @returns {Boolean} Deep comparison result
 */
Array.prototype.equals = function (array) {
  return this.length === array.length && this.every((item, index) => item === array[index]);
};

/**
 * Returns all combinations of an array with the values to remove.
 * Based on: http://stackoverflow.com/q/38923072/265570
 * @param {Array} remove Values to remove from an array
 * @returns {Array} An array of combinations with values removed once each.
 */
Array.prototype.prunedCombinations = function (remove) {
  return prunedCombinations(this, remove, 0, []);
};

function prunedCombinations(haystack, needles, index, accumulator) {
  if (needles.length === 0) {
    // no more values to remove, solution found
    accumulator.push(haystack);
  } else if (index < haystack.length) {
    if (haystack[index] === needles[0]) {
      // matched one needle, remove it and search for the rest
      var without = haystack.slice();
      without.splice(index, 1);
      prunedCombinations(without, needles.slice(1), index, accumulator);
    }

    // also look for the same needles elsewhere in the original haystack
    prunedCombinations(haystack, needles, index + 1, accumulator);
  }

  // return all solutions found
  return accumulator;
}

/**
 * Returns all permutations of an array.
 * @memberof Array
 * @returns {Array} An array of permutations from source array
 */
Array.prototype.permutations = function () {
  let results = new Array(factorial(this.length).toNumber());
  let length = 0;

  function permutate(items, memo) {
    for (var i = 0; i < items.length; i++) {
      let current = items.splice(i, 1);
      if (items.length === 0) {
        results[length++] = memo.concat(current);
      }
      permutate(items.slice(), memo.concat(current));
      items.splice(i, 0, current[0]);
    }

    return results;
  }

  return permutate(this, []);
};

/**
 * Generator to permutate an array
 * @param {Array} permutation Values to permutate
 * @returns {Array} A permutated result
 */
exports.permute = function * (permutation) {
  let length = permutation.length;
  let c = Array(length).fill(0);
  let i = 1;

  yield permutation;
  while (i < length) {
    if (c[i] < i) {
      let k = (i % 2) ? c[i] : 0;
      let p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      yield permutation;
    } else {
      c[i] = 0;
      ++i;
    }
  }
};

/**
 * Get the next lexographical permutation of an array
 * @memberof Array
 * @returns {Boolean} True if there was another permutation available
 */
Array.prototype.nextPermutation = function () {
  // Find non-increasing suffix
  let i = this.length - 1;
  while (i > 0 && this[i - 1] >= this[i]) {
    i--;
  }
  if (i <= 0) {
    return false;
  }

  // Find successor to pivot
  let j = this.length - 1;
  while (this[j] <= this[i - 1]) {
    j--;
  }

  var temp = this[i - 1];
  this[i - 1] = this[j];
  this[j] = temp;

  // Reverse suffix
  j = this.length - 1;
  while (i < j) {
    temp = this[i];
    this[i] = this[j];
    this[j] = temp;
    i++;
    j--;
  }

  return true;
};

/**
 * Rotates the contents of an array
 * @memberof Array
 * @returns {Array}
 */
Array.prototype.rotate = Array.prototype.rotate || function () {
  this.push(this.shift());
  return this;
};

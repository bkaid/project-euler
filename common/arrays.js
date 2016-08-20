'use strict';

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

  if (size == this.length) {
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
Array.prototype.equals = function(array) {
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
  if (needles.length == 0) {
    // no more values to remove, solution found
    accumulator.push(haystack);
  }
  else if (index < haystack.length) {
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

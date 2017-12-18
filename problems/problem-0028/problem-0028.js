'use strict';

/**
 * Finds the diagonal sums of a spiral of numbers starting with number 1 and
 * moving to the right in a clockwise direction.
 * @param {Number} size Square size
 * @param {Number} modulo
 * @returns {Number}
 */
exports.spiralDiagonalSum = size => {
  let sum = 1;
  let i = 1;

  // treat odd numbers as levels of squares
  for (let level = 3; level <= size; level += 2) {
    // take the (level - 1)th number 4 times
    // eg for 5x5 square and on level 5, i would be 9 (1-9 covered in level)
    // and you'd want to take the (5-1=4)th number after i for each of the 4 corners
    for (let corner = 1; corner <= 4; corner++) {
      i += level - 1;
      sum += i;
    }
  }

  return sum;
};

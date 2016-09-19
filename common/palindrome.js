'use strict';

/**
 * Check if a string is the same written forward and backwards.
 * This implementation is faster than doing standard convert to array, reverse, join pattern.
 * @returns {Boolean} True if value is same forward and backwards
 */
String.prototype.isPalindrome = String.prototype.isPalindrome || function () {
  let length = Math.floor(this.length / 2);
  for (let i = 0; i < length; i++) {
    if (this[i] !== this[this.length - i - 1]) {
      return false;
    }
  }
  return true;
};

'use strict';

/**
 * Filters a list of words to those that are triangle words:
 * The nth term of the sequence of triangle numbers is given by, tn = ½n(n+1)
 * By converting each letter in a word to a number corresponding to its
 * alphabetical position and adding these values we form a word value.
 * If the word value is a triangle number then we shall call the word a triangle word.
 * @param {String[]} words
 * @returns {String[]}
 */
exports.triangleWords = words => {
  const charOffSet = 64;
  return words.filter(word => {
    let characterSum = word.toUpperCase().split('').reduce((characterSum, currentCharacter) => characterSum + currentCharacter.charCodeAt(0) - charOffSet, 0);
    return exports.isTriangleNumber(characterSum);
  });
};

/**
 * Determines if a number is a triangular number based on:
 * https://en.wikipedia.org/wiki/Triangular_number#Triangular_roots_and_tests_for_triangular_numbers
 * @param {Number} number
 * @returns {Boolean}
 */
exports.isTriangleNumber = number => {
  let n = (Math.sqrt((8 * number) + 1) - 1) / 2;
  return Number.isInteger(n);
};

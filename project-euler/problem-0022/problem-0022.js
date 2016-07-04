'use strict';

/**
 * Calculates the total of all the names scores, where each name is scored by multiplying the 
 * sum of the names characters alphabetical positions by its index position in the list. 
 * @param {String[]} names
 * @returns {Number}
 */
exports.namesScore = names => {
  const charOffSet = 64;
  return names.sort().reduce((totalNameScore, currentName, index) => {
    // get the characters of the name and sum their alphabetical position values
    let characterSum = currentName.toUpperCase().split('').reduce((characterSum, currentCharacter) => characterSum + currentCharacter.charCodeAt(0) - charOffSet, 0);
    // calculate the name score by multiplying the position value sum by the position of the name in the list
    return totalNameScore + (index + 1) * characterSum;
  }, 0);
};

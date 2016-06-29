'use strict';

/**
 * Calculates the maximum total from top to bottom of a triangle
 * @param {Number[][]} triangle
 * @returns {Number}
 */
exports.maximumPathSum = (triangle) => {
  // start at the second to last row
  for(let row = triangle.length - 2; row >= 0; row--) {
    // for each column add its value to its highest child path
    for(let column = 0, childRow = triangle[row + 1]; column < triangle[row].length; column++) {
      triangle[row][column] += Math.max(childRow[column], childRow[column + 1]);
    }
  }
  return triangle[0][0];
};

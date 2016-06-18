'use strict';

/**
 * Calculates the greatest product of n adjacent numbers in the same direction (up, down, left, right, or diagonally) in a grid.
 * @param {Number[]} grid
 * @param {Number} n
 * @returns {Number}
 */
exports.largestGridProduct = (grid, n) => {
  let max = 0;
  grid.forEach((row, i) => {
    row.forEach((cell, j) => {
      let left = row.slice(j, j + n).reduce((previous, current) => previous * current, 1);
      let down = grid.slice(i, i + n).reduce((previous, current) => previous * current[j], 1);
      let diagonalLeft = null;
      let diagonalRight = null;

      for(let k = 0; k < n && k < grid.length - i && k < row.length - j; k++) {
        diagonalLeft = diagonalLeft === null ? 1 : diagonalLeft;
        diagonalLeft *= grid[i + k][j + k];
      }

      for(let k = 0; k < n && j >= n - 1 && grid.length - i >= n; k++) {
        diagonalRight = diagonalRight === null ? 1 : diagonalRight;
        diagonalRight *= grid[i + k][j - k];
      }

      max = Math.max(max, left, down, diagonalLeft, diagonalRight);
    });
  });
  return max;
};

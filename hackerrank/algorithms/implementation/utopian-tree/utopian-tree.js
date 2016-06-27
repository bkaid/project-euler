'use strict';

/**
 * Calculates the height of a utopian tree. It doubles in height in spring, and increases in height by 1 in summer. 
 * @param {Number} cycles
 * @returns {Number}
 */
exports.getHeight = (cycles) => {
  let height = 1;

  for(let i = 1; i <= cycles; i++) {
    height = (i % 2) ? height * 2 : height + 1;
  }

  return height;
};

'use strict';

/**
 * Find the maximum possible sum of a contiguous subarray
 * Implementation based on Kadane's algorithm:
 * https://en.wikipedia.org/wiki/Maximum_subarray_problem
 * @returns {Number}
 */
Array.prototype.maxSubArray = Array.prototype.maxSubArray || function () {
  let maxToIndex = null;
  let currentMax = null;
  let maxElement = null;

  this.forEach(element => {
    maxToIndex = Math.max(0, maxToIndex + element);
    currentMax = Math.max(currentMax, maxToIndex);
    maxElement = maxElement === null || element > maxElement ? element : maxElement;
  });

  return currentMax > 0 ? currentMax : maxElement;
};

/**
 * Find the maximum possible sum of a non-contiguous subarray
 * @returns {Number}
 */
Array.prototype.maxSubArrayNonContigious = Array.prototype.maxSubArrayNonContigious || function () {
  let maxElement = null;
  let sum = null;

  this.forEach(element => {
    maxElement = maxElement === null || element > maxElement ? element : maxElement;
    sum += element > 0 ? element : 0;
  });

  return sum > 0 ? sum : maxElement;
};

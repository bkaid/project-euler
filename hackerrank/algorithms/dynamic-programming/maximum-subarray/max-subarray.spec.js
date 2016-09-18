'use strict';
require('./max-subarray');

describe('maxSubarray', () => {
  it('should calculate max contiguous subarray for known input', () => {
    expect([-2, 1, -3, 4, -1, 2, 1, -5, 4].maxSubArray()).toBe(6);
  });

  it('should return max for all negative array', () => {
    expect([-3, -2, -1].maxSubArray()).toBe(-1);
  });
});

describe('maxSubArrayNonContigious', () => {
  it('should calculate max contiguous subarray for known input', () => {
    expect([-2, 1, -3, 4, -1, 2, 1, -5, 4].maxSubArrayNonContigious()).toBe(12);
  });

  it('should return max for all negative array', () => {
    expect([-3, -2, -1].maxSubArrayNonContigious()).toBe(-1);
  });
});

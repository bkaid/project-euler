'use strict';
const problem18 = require('./problem-0018');

describe('maximumPathSum', () => {
  it('calculates maximum path sum for known input', () => {
    let triangle = [
        [3],
       [7, 4],
      [2, 4, 6],
     [8, 5, 9, 3]
    ];

    expect(problem18.maximumPathSum(triangle)).toBe(23);
  });
});

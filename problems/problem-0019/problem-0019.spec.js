'use strict';
const problem19 = require('./problem-0019');

describe('firstOfMonthSundays', () => {
  it('calculates days for known input', () => {
    expect(problem19.firstOfMonthSundays(1900, 1, 1, 1910, 1, 1)).toBe(18);
    expect(problem19.firstOfMonthSundays(2000, 1, 1, 2020, 1, 1)).toBe(35);
  });

  it('when end date is before start date', () => {
    expect(problem19.firstOfMonthSundays(1910, 1, 1, 1900, 1, 1)).toBe(0);
  });

  it('excludes start dates with days greater than 1', () => {
    expect(problem19.firstOfMonthSundays(1900, 4, 1, 1900, 4, 2)).toBe(1);
    expect(problem19.firstOfMonthSundays(1900, 4, 2, 1900, 4, 3)).toBe(0);
  });

  it('counts date ranges inclusively', () => {
    expect(problem19.firstOfMonthSundays(2015, 2, 1, 2015, 3, 1)).toBe(2);
  });

  it('handles invalid dates', () => {
    expect(problem19.firstOfMonthSundays(1900, 2, 31, 1900, 3, 1)).toBe(0);
  });
});

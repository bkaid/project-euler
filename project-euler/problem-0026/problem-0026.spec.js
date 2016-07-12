'use strict';
const problem26 = require('./problem-0026');

describe('largestReciprocalCycle', () => {
  beforeEach(function() {
    problem26.largestReciprocalCycles = new Map();
  });

  it('calculates largest reciprocal cycle for known input', () => {
    expect(problem26.largestReciprocalCycle(10)).toEqual(7);
    expect(problem26.largestReciprocalCycle(11)).toEqual(7);
    expect(problem26.largestReciprocalCycle(100)).toEqual(97);
  });

  it('finds smallest d, less than max', () => {
    expect(problem26.largestReciprocalCycle(7)).toEqual(3);
  });
});

describe('periodLength', () => {
  it('calculates period length', () => {
    expect(problem26.periodLength(1, 2)).toEqual(0);
    expect(problem26.periodLength(1, 3)).toEqual(1);
    expect(problem26.periodLength(1, 4)).toEqual(0);
    expect(problem26.periodLength(1, 5)).toEqual(0);
    expect(problem26.periodLength(1, 6)).toEqual(1);
    expect(problem26.periodLength(1, 7)).toEqual(6);
    expect(problem26.periodLength(1, 8)).toEqual(0);
    expect(problem26.periodLength(1, 9)).toEqual(1);
    expect(problem26.periodLength(1, 17)).toEqual(16);
    expect(problem26.periodLength(1, 97)).toEqual(96);
  });
});

'use strict';
const problem50 = require('./problem-0050');

describe('consecutivePrimeSum', () => {
  it('finds prime sum of most consecutive primes for known input', () => {
    expect(problem50.consecutivePrimeSum(100)).toEqual(41);
    expect(problem50.consecutivePrimeSum(1000)).toEqual(953);
  });
});

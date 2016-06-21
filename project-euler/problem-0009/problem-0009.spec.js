'use strict';
const problem9 = require('./problem-0009');

describe('pythagoreanTripletProduct', () => {
  it('should calculate product for known input', () => {
    expect(problem9.maxPythagoreanTripletProduct(12)).toBe(60);
  });

  it('should lookup from cache for second check', () => {
    problem9.maxPythagoreanTripletProduct(12);
    expect(problem9.maxPythagoreanTripletProduct(12)).toBe(60);
  });
});

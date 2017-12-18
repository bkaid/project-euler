'use strict';
const problem40 = require('./problem-0040');
const BigNumber = require('bignumber.js');
BigNumber.config({ EXPONENTIAL_AT: 1e+9 });
BigNumber.config({ POW_PRECISION: 1e+9 });

describe('champernowneDigit', () => {
  it('calculates the nth digit of the Champernowne constant for known input', () => {
    expect(problem40.champernowneDigit(1)).toEqual(1);
    expect(problem40.champernowneDigit(2)).toEqual(2);
    expect(problem40.champernowneDigit(9)).toEqual(9);
    expect(problem40.champernowneDigit(10)).toEqual(1);
    expect(problem40.champernowneDigit(11)).toEqual(0);
    expect(problem40.champernowneDigit(12)).toEqual(1);
    expect(problem40.champernowneDigit(15)).toEqual(2);
    expect(problem40.champernowneDigit(Number.MAX_SAFE_INTEGER)).toEqual(3);
    expect(problem40.champernowneDigit(new BigNumber('9007199254740993'))).toEqual(7);
    expect(problem40.champernowneDigit(new BigNumber(10).pow(18))).toEqual(3);
  });
});

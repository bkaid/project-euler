'use strict';
const problem14 = require('./problem-0014');

describe('collatzChainLength', () => {
  it('calculates length for known input', () => {
    expect(problem14.longestCollatzChain(1)).toBe(1);
    expect(problem14.longestCollatzChain(2)).toBe(2);
    expect(problem14.longestCollatzChain(3)).toBe(3);
    expect(problem14.longestCollatzChain(4)).toBe(3);
    expect(problem14.longestCollatzChain(5)).toBe(3);
    expect(problem14.longestCollatzChain(6)).toBe(6);
    expect(problem14.longestCollatzChain(7)).toBe(7);
    expect(problem14.longestCollatzChain(8)).toBe(7);
    expect(problem14.longestCollatzChain(9)).toBe(9);
    expect(problem14.longestCollatzChain(10)).toBe(9);
    expect(problem14.longestCollatzChain(17)).toBe(9);
    expect(problem14.longestCollatzChain(18)).toBe(18);
    expect(problem14.longestCollatzChain(19)).toBe(19);
    expect(problem14.longestCollatzChain(20)).toBe(19);
    expect(problem14.longestCollatzChain(27)).toBe(27);
    expect(problem14.longestCollatzChain(26)).toBe(25);
    expect(problem14.longestCollatzChain(25)).toBe(25);
    expect(problem14.longestCollatzChain(24)).toBe(19);
    expect(problem14.longestCollatzChain(18)).toBe(18);
  });
});

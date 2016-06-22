'use strict';
const problem17 = require('./problem-0017');

describe('toWords', () => {
  beforeEach(function() {
    problem17.BRITISH_ENGLISH = true;
  });

  it('calculates words under 20', () => {
    expect(problem17.toWords(0)).toBe('Zero');
    expect(problem17.toWords(1)).toBe('One');
    expect(problem17.toWords(19)).toBe('Nineteen');
  });
  
  it('calculates words under 100', () => {
    expect(problem17.toWords(20)).toBe('Twenty');
    expect(problem17.toWords(90)).toBe('Ninety');
    expect(problem17.toWords(99)).toBe('Ninety-Nine');
  });
  
  it('calculates words for large numbers', () => {
    expect(problem17.toWords(342)).toBe('Three Hundred and Forty-Two');
    expect(problem17.toWords(1000)).toBe('One Thousand');
    expect(problem17.toWords(999000)).toBe('Nine Hundred and Ninety-Nine Thousand');
    expect(problem17.toWords(1000000)).toBe('One Million');
    expect(problem17.toWords(1000000000)).toBe('One Billion');
    expect(problem17.toWords(1010000000)).toBe('One Billion Ten Million');
    expect(problem17.toWords(1000010000)).toBe('One Billion Ten Thousand');
    expect(problem17.toWords(1000000000000)).toBe('One Trillion');
  });

  it('calculates words for American English', () => {
    problem17.BRITISH_ENGLISH = false;
    expect(problem17.toWords(342)).toBe('Three Hundred Forty Two');
    expect(problem17.toWords(999000)).toBe('Nine Hundred Ninety Nine Thousand');
    expect(problem17.toWords(104382426112)).toBe('One Hundred Four Billion Three Hundred Eighty Two Million Four Hundred Twenty Six Thousand One Hundred Twelve');
  });
  
});

'use strict';

const cardinalNumbers = {
  0: 'Zero',
  1: 'One',
  2: 'Two',
  3: 'Three',
  4: 'Four',
  5: 'Five',
  6: 'Six',
  7: 'Seven',
  8: 'Eight',
  9: 'Nine',
  10: 'Ten',
  11: 'Eleven',
  12: 'Twelve',
  13: 'Thirteen',
  14: 'Fourteen',
  15: 'Fifteen',
  16: 'Sixteen',
  17: 'Seventeen',
  18: 'Eighteen',
  19: 'Nineteen',
  20: 'Twenty',
  30: 'Thirty',
  40: 'Forty',
  50: 'Fifty',
  60: 'Sixty',
  70: 'Seventy',
  80: 'Eighty',
  90: 'Ninety',
  100: 'Hundred',
  1000: 'Thousand',
  1000000: 'Million',
  1000000000: 'Billion',
  1000000000000: 'Trillion'
};

exports.BRITISH_ENGLISH = true;

/**
 * Converts a numbers to English words
 * @param {Number} n
 * @returns {String}
 */
let toWords = exports.toWords = (n) => {
  if (n < 0) {
    return 'negative ' + Math.abs(toWords(n));
  }
  
  if (n < 20) {
    return cardinalNumbers[n];
  }

  if (n < 100) {
    let tens = Math.floor(n / 10) * 10;
    let ones = n % 10;
    let separator = exports.BRITISH_ENGLISH ? '-' : ' '; 
    return cardinalNumbers[tens] + (ones ? separator + toWords(ones) : '');
  }

  if (n < 1000) {
    let hundreds = Math.floor(n / 100);
    let remainder = n % (100 * hundreds); 
    let separator = exports.BRITISH_ENGLISH ? ' and ' : ' ';
    return toWords(hundreds) + ' ' + cardinalNumbers[100] + (remainder ? separator + toWords(remainder) : '');
  }

  let result = '';
  for(let i = 15; i >= 3; i -= 3) {
    let base = Math.pow(10, i);
    let units = Math.floor(n / base);
    if (units) {
      let remainder = n % (base * units); 
      result += toWords(units) + ' ' + cardinalNumbers[base] + (remainder ? ' ' + toWords(remainder) : '');
      n /= base;
    }
  }
  return result;
};

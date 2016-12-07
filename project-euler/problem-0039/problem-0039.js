'use strict';
const gcd = require('../../common/math/gcd');

/**
 * Finds pythagorean triples with a perimiter up to specified max
 * @param {Number} max maximum perimiter size
 * @returns {{a: Number, b: Number, c: Number, p: Number}[]}
 */
exports.integerRightTriangles = max => {
  let results = [];

  // get all primitive pythagorean triples using Euclids formula:
  // a = m² - n², b = 2mn, c = m² + n²
  // where:
  // m > n > 0
  // m & n are both not odd
  // m & n are coprime
  for (let n = 1; ((4 * n * n) + (6 * n) + 2) <= max; n++) {
    for (let m = n + 1; ((2 * m * m) + (2 * m * n)) <= max; m++) {
      let a = (m * m) - (n * n);
      let b = 2 * m * n;
      let c = (m * m) + (n * n);

      if (((m % 2) === 0 || (n % 2 === 0)) && gcd(m, n) === 1) {
        // primitive prime found - generate pythagorean triples up to max perimiter
        let k = 1;
        let p = a + b + c;
        while (p <= max) {
          results.push({ a: k * a, b: k * b, c: k * c, p: p });
          k++;
          p = k * (a + b + c);
        }
      }
    }
  }

  return results;
};

/**
 * Finds the most common perimiter of integer right triangles up to max
 * @param {Number} max maximum perimiter size
 * @returns {{a: number, b: number, c: number}[]}
 */
exports.mostFrequentIntegerRightTrianglePerimeter = max => {
  let rightTriangles = exports.integerRightTriangles(max);
  let occurences = rightTriangles.map(a => rightTriangles.filter(b => a.p === b.p).length);
  let maxOccurence = Math.max(...occurences);
  return rightTriangles[occurences.indexOf(maxOccurence)].p;
};

'use strict';

/**
 * A fraction is a reduced proper faction n/d when n and d are positive integers and n < d and HCF(n,d)=1
 * Find maximum reduced proper fraction below a limit for a specified max denominator
 * @param {Number} maxDenominator
 * @param {Number} limitNumerator
 * @param {Number} limitDenominator
 * @returns {{numerator: number, denominator: number}}
 */
exports.maxReducedProperFraction = (maxDenominator, limitNumerator, limitDenominator) => {
  let best = { numerator: 0, denominator: 1 };

  /*
    For all denominators 1 to max (1000000), solve for numerator below limit.
    Subtracting 1 to ensure equality matches of 3/7 aren't returned.
    Flooring to make sure its properly divisible
      n     3 (limitN)
     --- < ---         = 7n < 3d - 1 = n < (3d - 1)/7
      d     7 (limitD)
  */
  for (let d = maxDenominator; d > 2; d--) {
    let n = Math.floor(((limitNumerator * d) - 1) / limitDenominator);

    /*
      Test that the current numerator is better than the best found so far
          n      3 (bestN)
         ---  > ---         = n * 7 < 3 * d
          d      7 (bestD)
    */
    if (n * best.denominator >= best.numerator * d) {
      best.numerator = n;
      best.denominator = d;
    }
  }

  return best;
};

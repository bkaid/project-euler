'use strict';
require('../../common/math/digits');
require('../../common/arrays');

/**
 * Finds fractions under 1 (numerator < denominator) with numerator and denominators that can be non-trivially
 * simplified by cancelling digits from numerator and denominator
 * @param {Number} digits
 * @param {Number} digitsToCancel
 * @returns {{numerator: number, denominator: number}[]}
 */
exports.digitCancellingFractions = (digits, digitsToCancel) => {
  let result = [];

  for (let numerator = Math.pow(10, digits - 1); numerator < Math.pow(10, digits); numerator++) {
    for (let denominator = numerator + 1; denominator < Math.pow(10, digits); denominator++) {
      let value = numerator / denominator;
      let numeratorDigits = numerator.toDigits();
      let denominatorDigits = denominator.toDigits();

      let numeratorIntersection = numeratorDigits.filter((n) => n > 0 && denominatorDigits.indexOf(n) != -1);
      let denominatorIntersection = denominatorDigits.filter((n) => n > 0 && numeratorDigits.indexOf(n) != -1);

      if (numeratorIntersection.length >= digitsToCancel && denominatorIntersection.length >= digitsToCancel) {
        combination:
        for (let numeratorCombination of numeratorIntersection.combinations(digitsToCancel)) {
          let prunedNumerators = numeratorDigits.prunedCombinations(numeratorCombination);
          for (let denominatorCombination of denominatorIntersection.combinations(digitsToCancel)) {
            let prunedDenominators = denominatorDigits.prunedCombinations(denominatorCombination);
            if (numeratorCombination.slice().sort().equals(denominatorCombination.slice().sort())) {
              for (let prunedNumerator of prunedNumerators) {
                for (let prunedDenominator of prunedDenominators) {
                  let cancelledNumerator = prunedNumerator.toNumber();
                  let cancelledDenominator = prunedDenominator.toNumber();
                  if (cancelledNumerator / cancelledDenominator === value) {
                    //console.log(`${numerator}/${denominator} = ${cancelledNumerator}/${cancelledDenominator}`);
                    result.push({ numerator: numerator, denominator: denominator });
                    break combination;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return result;
};

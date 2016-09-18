'use strict';
require('../pad-left.js');

Number.prototype.toBinary = Number.prototype.toBinary || function (bits = 32) {
  let sign = this > 0 ? '' : '-';
  let result = Math.abs(this).toString(2);
  return sign + result.padLeft('0', bits);
};

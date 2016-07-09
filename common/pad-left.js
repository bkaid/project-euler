'use strict';

String.prototype.padLeft = function (character, length)  {
  return character.repeat(Math.max(0, length - this.length)) + this;
};
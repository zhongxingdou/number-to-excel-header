(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.numberToExcelHeader = factory());
}(this, (function () { 'use strict';

  const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  function numberToExcelHeader(index) {
      index -= 1;

      const quotient = Math.floor(index / 26);
      if (quotient > 0) {
          return numberToExcelHeader(quotient) + chars[index % 26];
      }

      return chars[index % 26];
    }

  return numberToExcelHeader;

})));
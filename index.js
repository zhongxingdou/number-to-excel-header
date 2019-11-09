(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.numberToExcelHeader = factory());
}(this, (function () { 'use strict';
  function numberToExcelHeader(index) {
      return index.toString(26).split('')
        .map(i => String.fromCharCode(i.charCodeAt(0) + (/\d/.test(i) ? 48 : 10)))
        .join('')
        .replace(/`/g, 'a')
        .toUpperCase();
    }

  return numberToExcelHeader;
})));
var coinflip = require('..');

var isBoolean = require('lodash.isboolean');
var assert = require('assert');

describe('coinflip', function () {
  it('always returns a boolean', function () {
    for (var i = 0; i < 10000; i++) {
      assert(isBoolean(coinflip()));
    }
  });

  it('eventually returns true', function () {
    while (true) {
      if (coinflip() === true) { break; }
    }
  });

  it('eventually returns false', function () {
    while (true) {
      if (coinflip() === false) { break; }
    }
  });
});

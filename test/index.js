var coinflip = require('..');

var isBoolean = require('lodash.isboolean');
var assert = require('assert');
var test = require('node:test');

test('coinflip always returns a boolean', function () {
  for (var i = 0; i < 10000; i++) {
    assert(isBoolean(coinflip()));
  }
});

test('coinflip eventually returns true', function () {
  while (true) {
    if (coinflip() === true) { break; }
  }
});

test('coinflip eventually returns false', function () {
  while (true) {
    if (coinflip() === false) { break; }
  }
});

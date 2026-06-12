import coinflip from "../coinflip.js";

import assert from "node:assert";
import test from "node:test";

test("coinflip always returns a boolean", function () {
  for (var i = 0; i < 10000; i++) {
    assert.equal(typeof coinflip(), "boolean");
  }
});

test("coinflip eventually returns true", function () {
  while (true) {
    if (coinflip() === true) {
      break;
    }
  }
});

test("coinflip eventually returns false", function () {
  while (true) {
    if (coinflip() === false) {
      break;
    }
  }
});

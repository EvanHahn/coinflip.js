import coinflip from "./coinflip.js";

import assert from "node:assert";
import test from "node:test";

test("coinflip always returns a boolean", () => {
  for (let i = 0; i < 100; i++) {
    assert.equal(typeof coinflip(), "boolean");
  }
});

test("coinflip eventually returns true", () => {
  while (true) {
    if (coinflip() === true) break;
  }
});

test("coinflip eventually returns false", () => {
  while (true) {
    if (coinflip() === false) break;
  }
});

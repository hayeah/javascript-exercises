const { assert } = require("chai");
const hello = require("../src/hello");

describe("hello world", () => {
  it("says hello", () => {
    assert.equal(hello.world(), "hello world");
  });
});
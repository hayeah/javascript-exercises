const { assert } = require("chai");
const fun = require("../src/function");

describe("function", () => {
  describe("函数的参数", () => {

  });

  describe("arrayOfFunctions", () => {
    it("数组里面有三个函数，调用分别返回 1，2，3", () => {
      const [one, two, three] = fun.arrayOfFunctions();

      assert.equal(one(), 1);
      assert.equal(two(), 2);
      assert.equal(three(), 3);
    });
  });

  describe("dictionaryOfFunctions", () => {
    it("字典里面有三个函数，调用分别返回 a，b，c", () => {
      const fns = fun.dictionaryOfFunctions();

      assert.equal(fns["a"](), "a");
      assert.equal(fns["b"](), "b");
      assert.equal(fns["c"](), "c");
    });
  });

});
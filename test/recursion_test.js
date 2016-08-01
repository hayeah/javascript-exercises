const { assert } = require("chai");
const recurse = require("../src/recurse");

describe("recursion", () => {

  // 像下面这样写就可以用函数名递归
  //
  // module.exports = {
  //   factorial: function factorial(n) {
  //     if(n === 1) {
  //       return ???;
  //     } else {
  //       return ???;
  //     }
  //   }
  // }
  describe("factorial(n)", () => {
    it("返回 1 * 2 * ... * n", () => {
      const { factorial } = recurse;
      assert.equal(factorial(1), 1);
      assert.equal(factorial(2), 2);
      assert.equal(factorial(3), 6);
      assert.equal(factorial(10), 3628800);
    });
  });

  // 用 substring
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/substring
  describe("checkPalindrome", () => {
    it("检测一个字串是否是回文", () => {
      const { checkPalindrome } = recurse;

      assert.equal(checkPalindrome(""), true);
      assert.equal(checkPalindrome("a"), true);
      assert.equal(checkPalindrome("ab"), false);
      assert.equal(checkPalindrome("aa"), true);
      assert.equal(checkPalindrome("aba"), true);
      assert.equal(checkPalindrome("abba"), true);
      assert.equal(checkPalindrome("abaa"), false);
      assert.equal(checkPalindrome("abcdcba"), true);
    });
  });

  describe("countNestedElements(array)", () => {
    it("数嵌套数组一共有多少个元素", () => {
      const { countNestedElements } = recurse;
      assert.equal(countNestedElements([]), 0);
      assert.equal(countNestedElements([1]), 1);
      assert.equal(countNestedElements([[1]]), 1);
      assert.equal(countNestedElements([[[1]]]), 1);
      assert.equal(countNestedElements([[1], [2,3, [4,5,[6],[7,8,9]]]]), 9);
    });
  });

  describe("flattenNestedArrays(arrays)", () => {
    it("拍扁深度嵌套的数组", () => {
      const { flattenNestedArrays } = recurse;
      assert.deepEqual(flattenNestedArrays([]), []);
      assert.deepEqual(flattenNestedArrays([1]), [1]);
      assert.deepEqual(flattenNestedArrays([[1]]), [1]);
      assert.deepEqual(flattenNestedArrays([[[1]]]), [1]);
      assert.deepEqual(flattenNestedArrays(
        [[1], [2,3, [], [[],[]], [4,5,[6],[7,8,9]]]]),
        [1,2,3,4,5,6,7,8,9]);
    });
  });

  describe("typeCounts(o)", () => {
    it("计算每一种类型出现几次", () => {
      const { typeCounts } = recurse;

      var o = [];
      assert.deepEqual(typeCounts(0), {
        arrays: 0,
        numbers: 1,
        strings: 0,
        objects: 0,
      });

      assert.deepEqual(typeCounts("a"), {
        arrays: 0,
        numbers: 0,
        strings: 1,
        objects: 0,
      });

      assert.deepEqual(typeCounts({}), {
        arrays: 0,
        numbers: 0,
        strings: 0,
        objects: 1,
      });

      assert.deepEqual(typeCounts([]), {
        arrays: 1,
        numbers: 0,
        strings: 0,
        objects: 0,
      });

      assert.deepEqual(typeCounts({a: []}), {
        arrays: 1,
        numbers: 0,
        strings: 0,
        objects: 1,
      });

      assert.deepEqual(typeCounts([{},1,2,"a"]), {
        arrays: 1,
        numbers: 2,
        strings: 1,
        objects: 1,
      });

      var o = [
        {a: "a", b: [2]},
        [3,4, {c: ["c"]}]
      ];

      assert.deepEqual(typeCounts(o), {
        arrays: 4,
        numbers: 3,
        strings: 2,
        objects: 2,
      });
    });
  });

  // describe("nestedReduce(arrays, reducer)");

  // recursively generate data
  // tree traversal
  it
});
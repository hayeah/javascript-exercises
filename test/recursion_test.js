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

  // describe("nestedReduce(arrays, reducer)");



  // count how many elements in deeply nested arrays
  // factorial, fib
  // recursively generate data
  // tree traversal
  // flatten arrays
  it
});
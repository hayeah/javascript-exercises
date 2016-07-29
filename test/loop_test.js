const { assert } = require("chai");
const loop = require("../src/loop");

describe("for 循环", () => {
  /*
  // 提示：用数组的 push 方法去积累元素。

  cloneArray(arr) {
    let result = [];
    for(let i = 0; i < arr.length; i++) {
      result.push(____);
    }

    return result;
  }
  */
  describe("cloneArray", () => {
    it("由 0 到 n 遍历一个数组，构建一个新的数组", () => {
      let a1 = [];
      let r1 = loop.cloneArray(a1);
      assert.notEqual(r1, a1);
      assert.deepEqual(r1, []);

      let r2 = [1, 2, 3];
      let _a2 = loop.cloneArray(r2);
      assert.notEqual(_a2, r2);
      assert.deepEqual(_a2, [1,2,3]);

      let r3 = ["c", "b", "a"];
      let _a3 = loop.cloneArray(r3);
      assert.notEqual(_a3, r3);
      assert.deepEqual(_a3, ["c", "b", "a"]);

    });
  });

  describe("reverseArray", () => {
    it("由 n 到 0 遍历一个数组，构建一个反过来的数组", () => {

      let a1 = [];
      let r1 = loop.reverseArray(a1);
      assert.deepEqual(r1, []);

      let a2 = [1, 2, 3];
      let r2 = loop.reverseArray(a2);
      assert.deepEqual(r2, [3, 2, 1]);

      let a3 = ["c", "b", "a"];
      let r3 = loop.reverseArray(a3);
      assert.deepEqual(r3, ["a", "b", "c"]);
    });
  });

  describe("filterNegativeNumbers", () => {
    it("构建新的数组，去除负数的元素", () => {

      let a1 = [];
      let r1 = loop.filterNegativeNumbers(a1);
      assert.deepEqual(r1, []);

      let a2 = [1, 2, 3];
      let r2 = loop.filterNegativeNumbers(a2);
      assert.deepEqual(r2, [1, 2, 3]);

      let a3 = [1, -1, 2, -2, 3, -3];
      let r3 = loop.filterNegativeNumbers(a3);
      assert.deepEqual(r3, [1, 2, 3]);
    });
  });

  describe("keepTwoNegativeNumbers", () => {
    it("构建新的数组，只保留最多两个负数的元素", () => {

      let a1 = [];
      let r1 = loop.keepTwoNegativeNumbers(a1);
      assert.deepEqual(r1, []);

      let a2 = [1, 2, 3];
      let r2 = loop.keepTwoNegativeNumbers(a2);
      assert.deepEqual(r2, [1, 2, 3]);

      let a3 = [1, -1, 2, -2, 3, -3];
      let r3 = loop.keepTwoNegativeNumbers(a3);
      assert.deepEqual(r3, [1, -1, 2, -2, 3]);
    });
  });

  describe("doubleEvenElements", () => {
    it("直接修改数组元素，每个数字双倍", () => {
      let a1 = [];
      let r1 = loop.doubleEvenElements(a1);
      assert.deepEqual(r1, []);

      let a2 = [1, 2, 3];
      let r2 = loop.doubleEvenElements(a2);
      assert.equal(r2, a2);
      assert.deepEqual(r2, [2, 4, 6]);
    });
  });

  /**
   * collectPropertyValues(arr, key) {
   *   ...
   * }
   */

  describe("collectPropertyValues(arr, key)", () => {
    it("数组里面有对象，把 key 参数指定的值取出来收集到数组里面", () => {
      let a = [
        {foo: 1, bar: "a"},
        {foo: 2, bar: "b"},
        {foo: 3, bar: "c"},
      ];

      let r1 = loop.collectPropertyValues(a, "foo");
      assert.deepEqual(r1, [1, 2, 3]);

      let r2 = loop.collectPropertyValues(a, "bar");
      assert.deepEqual(r2, ["a", "b", "c"]);

      let r3 = loop.collectPropertyValues(a, "baz");
      assert.deepEqual(r3, [undefined, undefined, undefined]);
    });
  });

  describe("sumNestedNumberArrays(arr)", () => {
    it("用嵌套循环把嵌套数组的数字加总", () => {
      let a = [
        [1,2,3],
        [4,5,6,7],
        [],
        [8,9,10],
      ];

      let sum = loop.sumNestedNumberArrays(a);
      assert.equal(sum, 55);
    });
  });

  describe("concatenateArrays(arrays)", () => {
    it("把数组里面的数组全部拼接在一起", () => {
      let arrays = [
        [1,2,3],
        [4,5,6,7],
        [],
        [8,9,10],
      ];

      let result = loop.concatenateArrays(arrays);
      assert.deepEqual(result, [1,2,3,4,5,6,7,8,9,10]);
    });
  });

  describe("removeDuplicatedNumbers(arr)", () => {
    it("把重复的数字移除", () => {
      let a = [
        0,1,2,3,1,2,4,5,6,7,8,9,8,8,9,0
      ];

      let sum = loop.removeDuplicatedNumbers(a);
      assert.deepEqual(sum, [0,1,2,3,4,5,6,7,8,9]);
    });
  });

  describe("removeDuplicatedNumbers(arr)", () => {
    it("把重复的数字移除", () => {
      let a = [
        0,1,2,3,1,2,4,5,6,7,8,9,8,8,9,0
      ];

      let sum = loop.removeDuplicatedNumbers(a);
      assert.deepEqual(sum, [0,1,2,3,4,5,6,7,8,9]);
    });
  });




});
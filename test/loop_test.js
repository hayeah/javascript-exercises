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
      assert.deepEqual(_a2, [1, 2, 3]);

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

      const { keepTwoNegativeNumbers } = loop;

      let a1 = [];
      let r1 = keepTwoNegativeNumbers(a1);
      assert.deepEqual(r1, []);

      let a2 = [1, 2, 3];
      let r2 = keepTwoNegativeNumbers(a2);
      assert.deepEqual(r2, [1, 2, 3]);

      let a3 = [1, -1, 2, -2, 3, -3];
      let r3 = keepTwoNegativeNumbers(a3);
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
        { foo: 1, bar: "a" },
        { foo: 2, bar: "b" },
        { foo: 3, bar: "c" },
      ];

      let r1 = loop.collectPropertyValues(a, "foo");
      assert.deepEqual(r1, [1, 2, 3]);

      let r2 = loop.collectPropertyValues(a, "bar");
      assert.deepEqual(r2, ["a", "b", "c"]);

      let r3 = loop.collectPropertyValues(a, "baz");
      assert.deepEqual(r3, [undefined, undefined, undefined]);
    });
  });

  describe("collectMultiplePropertyValues(arr, keys)", () => {
    it("数组里面有对象，把 key 参数指定的值取出来收集到数组里面", () => {
      let a = [
        { foo: 1, bar: "a" },
        { foo: 2, bar: "b" },
        { foo: 3, bar: "c" },
      ];

      var r;
      r = loop.collectMultiplePropertyValues(a, ["foo"]);
      assert.deepEqual(r, [[1], [2], [3]]);

      r = loop.collectMultiplePropertyValues(a, ["bar", "foo"]);
      assert.deepEqual(r, [["a", 1], ["b", 2], ["c", 3]]);

      r = loop.collectMultiplePropertyValues(a, ["foo", "bar"]);
      assert.deepEqual(r, [[1, "a"], [2, "b"], [3, "c"]]);

      r = loop.collectMultiplePropertyValues(a, ["foo", "bar", "baz"]);
      assert.deepEqual(r, [[1, "a", undefined], [2, "b", undefined], [3, "c", undefined]]);
    });
  });

  describe("sumNestedNumberArrays(arr)", () => {
    it("用嵌套循环把嵌套数组的数字加总", () => {
      let a = [
        [1, 2, 3],
        [4, 5, 6, 7],
        [],
        [8, 9, 10],
      ];

      let sum = loop.sumNestedNumberArrays(a);
      assert.equal(sum, 55);
    });
  });

  describe("concatenateArrays(arrays)", () => {
    it("把数组里面的数组全部拼接在一起", () => {
      let arrays = [
        [1, 2, 3],
        [4, 5, 6, 7],
        [],
        [8, 9, 10],
      ];

      let result = loop.concatenateArrays(arrays);
      assert.deepEqual(result, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });
  });

  describe("removeDuplicatedNumbers(arr)", () => {
    it("把重复的数字移除", () => {
      let a = [
        0, 1, 2, 3, 1, 2, 4, 5, 6, 7, 8, 9, 8, 8, 9, 0
      ];

      let sum = loop.removeDuplicatedNumbers(a);
      assert.deepEqual(sum, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
  });

  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  describe("sliceArray(arr,a,b)", () => {
    it("取出索引大于等于 a 小于 b 的元素", () => {
      let numbers = [
        1, 2, 3, 4, 5, 6
      ];

      var result;

      result = loop.sliceArray(numbers, 0, 0);
      assert.deepEqual(result, []);

      result = loop.sliceArray(numbers, 0, 1);
      assert.deepEqual(result, [1]);

      result = loop.sliceArray(numbers, 2, 4);
      assert.deepEqual(result, [3, 4]);

      result = loop.sliceArray(numbers, 0, 3);
      assert.deepEqual(result, [1, 2, 3]);

      result = loop.sliceArray(numbers, 0, 10);
      assert.deepEqual(result, [1, 2, 3, 4, 5, 6]);


    });
  });

  describe("join(arr, separator)", () => {
    it("将数组中的所有元素连接成一个字符串", () => {
      let strings = [
        "a", "b", "cd"
      ];

      var result;

      result = loop.join([], ":");
      assert.deepEqual(result, "");

      result = loop.join(["a"], ":");
      assert.deepEqual(result, "a");

      result = loop.join(["a", "b"], "");
      assert.deepEqual(result, "ab");

      result = loop.join(["a", "b"], ":");
      assert.deepEqual(result, "a:b");

      result = loop.join(["a", "b", "cd"], ":");
      assert.deepEqual(result, "a:b:cd");

      result = loop.join(["a", "b", "cd"], ".");
      assert.deepEqual(result, "a.b.cd");

      result = loop.join(["a", "b", "cd"], "");
      assert.deepEqual(result, "abcd");

    });
  });

  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
  describe("lastIndexOf(arr, element)", () => {
    it("返回指定元素在数组中的最后一个的索引。如果不存在则返回 -1", () => {
      let numbers = [
        1, 2, 3, 4, 2
      ];

      var result;

      result = loop.lastIndexOf(numbers, 1);
      assert.deepEqual(result, 0);

      result = loop.lastIndexOf(numbers, 2);
      assert.deepEqual(result, 4);

      result = loop.lastIndexOf(numbers, 5);
      assert.deepEqual(result, -1);

      result = loop.lastIndexOf(numbers, "1");
      assert.deepEqual(result, -1);
    });
  });

  // http://www.css88.com/doc/underscore/#zip
  describe("zip(arrays)", () => {
    it("将每个 arrays 中相应位置的值合并在一起", () => {
      let arrays = [
        ['moe', 'larry', 'curly'],
        [30, 40, 50],
        [true, false, false],
      ];

      var result;

      result = loop.zip(arrays, 1);
      assert.deepEqual(result, [
        ["moe", 30, true],
        ["larry", 40, false],
        ["curly", 50, false]
      ]);
    });
  });



});
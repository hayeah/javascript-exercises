const { assert } = require("chai");
const functional = require("../src/functional");

const { equal, deepEqual } = assert;

describe("高阶函数的实现", () => {
  describe("map(array, fn)", () => {
    it("用循环实现 map", () => {
      const { map } = functional;

      let plus1 = (x) => x + 1;
      let power2 = (x) => x * x;

      deepEqual(map([], plus1), []);
      deepEqual(map([1, 2, 3], plus1), [2, 3, 4]);
      deepEqual(map([0, -1, -2, -3], plus1), [1, 0, -1, -2]);
      deepEqual(map([1, 2, 3], power2), [1, 4, 9]);
    });
  });

  describe("every(array, test)", () => {
    it("用循环实现 every", () => {
      const { every } = functional;

      let isString = (x) => typeof x === "string";
      let isNumber = (x) => typeof x === "number";

      deepEqual(every([], isNumber), true);
      deepEqual(every([1, 2, 3], isNumber), true);
      deepEqual(every([1, 2, "3"], isNumber), false);
      deepEqual(every(["1", "2", "3"], isString), true);
    });
  });

  describe("filter(array, test)", () => {
    it("用循环实现 filter", () => {
      const { filter } = functional;

      let isString = (x) => typeof x === "string";
      let isNumber = (x) => typeof x === "number";

      deepEqual(filter([], isNumber), []);
      deepEqual(filter([1, "2", 3], isNumber), [1, 3]);
      deepEqual(filter([1, "2", 3], isString), ["2"]);
      deepEqual(filter(["1", "2", "3"], isNumber), []);
    });
  });

  describe("calculateStringLengths(strings)", () => {
    it("用 reduce 计算数组里面每个字串的长度", () => {
      const { calculateStringLengths } = functional;

      calculateStringLengths([], {});

      calculateStringLengths(["Apple", "IBM", "Google"], {
        Apple: 5,
        IBM: 3,
        Google: 6,
      });
    });
  });

  describe("mapUsingReduce(array, fn)", () => {
    it("用 reduce 实现 map", () => {
      const map = functional.mapUsingReduce;

      let plus1 = (x) => x + 1;
      let power2 = (x) => x * x;

      deepEqual(map([], plus1), []);
      deepEqual(map([1, 2, 3], plus1), [2, 3, 4]);
      deepEqual(map([0, -1, -2, -3], plus1), [1, 0, -1, -2]);
      deepEqual(map([1, 2, 3], power2), [1, 4, 9]);
    });
  });

  describe("everyUsingReduce(array, fn)", () => {
    it("用 reduce 实现 every", () => {
      const every = functional.everyUsingReduce;

      let isString = (x) => typeof x === "string";
      let isNumber = (x) => typeof x === "number";

      deepEqual(every([], isNumber), true);
      deepEqual(every([1, 2, 3], isNumber), true);
      deepEqual(every([1, 2, "3"], isNumber), false);
      deepEqual(every(["1", "2", "3"], isString), true);
    });
  });

  describe("filterUsingReduce", () => {
    it("用 reduce 实现 filter", () => {
      const { filter } = functional;

      let isString = (x) => typeof x === "string";
      let isNumber = (x) => typeof x === "number";

      deepEqual(filter([], isNumber), []);
      deepEqual(filter([1, "2", 3], isNumber), [1, 3]);
      deepEqual(filter([1, "2", 3], isString), ["2"]);
      deepEqual(filter(["1", "2", "3"], isNumber), []);
    });
  });

  describe("reduce(array, reducer, initialValue)", () => {
    it("用循环实现 reduce", () => {
      const { reduce } = functional;

      var result;

      result = reduce(
        [],
        (result, string) => result + string,
        "");
      deepEqual(result, "");

      result = reduce(
        [],
        (result, string) => result + string,
        "0");
      deepEqual(result, "0");

      result = reduce(
        ["a", "b", "c"],
        (result, string) => result + string,
        "0");
      deepEqual(result, "0abc");
    });
  });

  describe("reduceRight(array, reducer, initialValue)", () => {
    it("和 reduce 一样，但是由后往前遍历数组", () => {
      const { reduceRight } = functional;

      var result;

      result = reduceRight(
        [],
        (result, string) => result + string,
        "");
      deepEqual(result, "");

      result = reduceRight(
        [],
        (result, string) => result + string,
        "0");
      deepEqual(result, "0");

      result = reduceRight(
        ["a", "b", "c"],
        (result, string) => result + string,
        "0");
      deepEqual(result, "0cba");
    });
  });
});
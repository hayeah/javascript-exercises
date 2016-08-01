const { assert } = require("chai");
const fun = require("../src/function");

describe("function", () => {
  describe("twoParameters", () => {
    it("用数组返回两个参数", () => {
      assert.deepEqual(fun.twoParameters(1, 2), [1, 2]);
      assert.deepEqual(fun.twoParameters("a", "b"), ["a", "b"]);
      assert.deepEqual(fun.twoParameters(1), [1, undefined]);
      assert.deepEqual(fun.twoParameters(), [undefined, undefined]);
    });
  });

  describe("defaultParameter", () => {
    it("用数组返回两个参数，第二个参数的默认值为 0", () => {
      assert.deepEqual(fun.defaultParameter(1, 2), [1, 2]);
      assert.deepEqual(fun.defaultParameter(1), [1, 0]);
      assert.deepEqual(fun.defaultParameter(), [undefined, 0]);
    });
  });

  describe("optionalDictionaryParameter(options)", () => {
    it("接受字典为可选参数，返回一个有默认值的字典", () => {
      assert.deepEqual(
        fun.optionalDictionaryParameter(),
        {a: 1, b: 2, c: 3});

      assert.deepEqual(
        fun.optionalDictionaryParameter({}),
        {a: 1, b: 2, c: 3});

      assert.deepEqual(
        fun.optionalDictionaryParameter({a: 10}),
        {a: 10, b: 2, c: 3});

      assert.deepEqual(
        fun.optionalDictionaryParameter({b: 20, c: 30}),
        {a: 1, b: 20, c: 30});
    });
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

  describe("arrayOfClosures(a, b, c)", () => {
    it("数组里面有三个闭包，调用分别返回参数的值", () => {
      var [one, two, three] = fun.arrayOfClosures(1,2,3);
      assert.equal(one(), 1);
      assert.equal(two(), 2);
      assert.equal(three(), 3);

      var [one, two, three] = fun.arrayOfClosures("a","b","c");
      assert.equal(one(), "a");
      assert.equal(two(), "b");
      assert.equal(three(), "c");
    });
  });

  describe("generateClosures(n)", () => {
    it("生成 n 个闭包，分别返回 1 ... n", () => {

      assert.deepEqual(fun.generateClosures(0), [])

      var [one, two, three] = fun.generateClosures(2);
      assert.equal(one(), 1);
      assert.equal(two(), 2);
      assert.equal(three, undefined);

      var [one, two, three] = fun.generateClosures(3);
      assert.equal(one(), 1);
      assert.equal(two(), 2);
      assert.equal(three(), 3);
    });
  });

  describe("nestedClosures", () => {
    it("用嵌套函数相加 3 个数字", () => {
      assert.equal(fun.nestedClosures(1)(1)(1), 3);
      assert.equal(fun.nestedClosures(1)(2)(3), 6);
    });
  });

});
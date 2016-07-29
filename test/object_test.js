const { assert } = require("chai");
const object = require("../src/object");

describe("Object 操作", () => {
  /**
   * 提示：用 Object.keys 这个方法。
   * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
   */
  describe("keys(o)", () => {
    it("用 Object.keys 返回对象所有属性名 ", () => {
      var r;

      r = object.keys({});
      assert.deepEqual(r, []);

      r = object.keys({
        a: 1,
        b: 2,
      });
      assert.deepEqual(r, ["a", "b"]);
    });
  });

  describe("values(o)", () => {
    it("收集一个对象所有属性的值到一个数组里面", () => {
      var r;

      r = object.values({});
      assert.deepEqual(r, []);

      r = object.values({
        a: 10,
        b: 20,
        c: 30,
      });
      assert.deepEqual(r, [10, 20, 30]);
    });
  });

  describe("toDictionary(a)", () => {
    it("把数组里面的键值转成对象", () => {
      var r;

      r = object.toDictionary([["a", 1], ["b", 2], ["c", 3]]);
      assert.deepEqual(r, {
        a: 1,
        b: 2,
        c: 3,
      });
    });
  });

  describe("toArray(o)", () => {
    it("把对象的键值收集到一个数组里面", () => {
      var r;

      r = object.toArray({});
      assert.deepEqual(r, []);

      r = object.toArray({
        a: 10,
        b: 20,
        c: 30,
      });

      assert.deepEqual(r, [["a", 10], ["b", 20], ["c", 30]]);
    });
  });

  describe("merge(objects)", () => {
    it("创建一个新的对象，把所有对象的属性合并在一起", () => {
      var r;

      r = object.merge([{}, {}]);
      assert.deepEqual(r, {});

      r = object.merge([
        {a: 1, b: 2},
        {c: 3},
        {d: 4},
        {},
        {e: 5, f: 6},
      ]);

      assert.deepEqual(r, {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
        e: 5,
        f: 6,
      });
    });

    it("后面的对象的属性可以覆盖之前对象的属性", () => {
      var r;

      r = object.merge([
        {a: 1, b: 2},
        {b: 3},
        {a: 4},
      ]);

      assert.deepEqual(r, {
        a: 4,
        b: 3,
      });
    });
  });

  describe("countStrings(strings)", () => {
    it("数同样的字串在数组里出现了几次", () => {
      var r;

      r = object.countStrings([]);
      assert.deepEqual(r, {});

      r = object.countStrings(["a", "b"]);
      assert.deepEqual(r, {
        a: 1,
        b: 1,
      });

      r = object.countStrings(["a", "b", "a", "b", "c"]);
      assert.deepEqual(r, {
        a: 2,
        b: 2,
        c: 1,
      });
    });
  });

  describe("transformProperties(o)", () => {
    it("把所有为数字的值 x 2, 所有为字串的值改成大写", () => {
      var r;

      r = object.transformProperties({
        a: 1,
        b: "abc",
        c: 2,
        d: "EfG"
      });

      assert.deepEqual(r, {
        a: 2,
        b: "ABC",
        c: 4,
        d: "EFG",
      });
    });
  });



});
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



});
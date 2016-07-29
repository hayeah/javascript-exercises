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

});
# JavaScript 基本练习

先安装练习的测试依赖：

```
git clone https://github.com/hayeah/javascript-exercises.git
cd javascript-exercises
npm install
```

所有的练习测试都在 test 文件夹。请你把练习答案放在 src 目录里面。

例：test/hello_test.js 的相对应文件应该是 src/hello.js。

# 完成第一条测试

我们来看看怎么满足一个测试。先从最简单的 hello world 开始。用 mocha 命令来执行测文件，我们会看到报错：

```
$ mocha test/hello_test.js

module.js:442
    throw err;
    ^

Error: Cannot find module '../src/hello'
```

模块还不存在，我们需要创建 `src/hello.js` 并输出名为 `world` 的函数：

```js
module.exports = {
  world() {
    // ____ 是你需要修改的地方
    return ____;
  }
}
```

虽然我们创建了 hello 这个模块，但上面的代码还是有错误。再运行一次测试看看报什么错：

```js
$ mocha test/hello_test.js
/Users/howard/p/sike/js-api-exercises/src/hello.js:3
    return ____;
           ^
ReferenceError: ____ is not defined
```

我们需要把 `____` 替换为真正的代码。打开 [hello_test.js](test/hello_test.js) 测试文件你会看到下面的这句断言：

```js
assert.equal(hello.world(), "hello world");
```

修复成功后你应该看到以下的输出：

```
$ mocha test/hello_test.js

  hello world
    ✓ says hello

  1 passing (11ms)
```

# JS 练习

1. [循环](test/loop_test.js)

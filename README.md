# NPM
NPM包管理

module.exports和exports和export和export default的区别，import和require的区别:
https://www.jianshu.com/p/f6c5a646c00b

export default,exports.default,module.exports,require,import整理:
https://www.jianshu.com/p/8fde36da1537

babel-plugin-add-module-exports使用：
https://www.npmjs.com/package/babel-plugin-add-module-exports

    .babelrc文件中必须添加：
    {
      "plugins": [
        [
          "add-module-exports",
          {
            "addDefaultProperty": true
          }
        ]
      ]
    }
    才可以使用：export default 或 module.exports.default；

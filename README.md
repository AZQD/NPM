# NPM

## NPM包管理

## 本地开发

```bash
$ npm run dev
```

## 打包dist

```bash
$ npm run build
```

## NPM发布

```bash
$ npm run pub
```

操作指南：

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
    才可以使用：export default 或 exports.default；

getScroll组件使用：
```js
  import { getScroll } from 'azqd';
  const {getScrollHeight, getScrollTop, getWindowHeight} = getScroll;
  
  componentWillMount () {
      window.addEventListener('scroll', () => {
          let scrollTopDistance = getScrollTop();
          let scrollBottomDistance = getScrollHeight() - getScrollTop() - getWindowHeight();
          console.log('获取页面滚动条距离顶部的距离：', scrollTopDistance);
          console.log('获取页面滚动条距离底部的距离：', scrollBottomDistance);
          }
      )
  }
```
参考文档：https://www.cnblogs.com/winyh/p/6715010.html

npm publish发布成功，但官网一直是旧版本号，重新npm login即可；

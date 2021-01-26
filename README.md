# NPM包管理

## 本地开发

```bash
$ npm run dev
```

## 本地打包

```bash
$ npm run build
```

## NPM发布

```bash
$ npm run pub
```


---


## 开发指南：

### module.exports和exports和export和export default的区别

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

### npm publish发布成功，但官网一直是旧版本号

    重新npm login即可；


---


## 使用

### 安装

```bash
$ npm install azqd --save
```

### 引入

```js
import AZQD from 'azqd';

const {CopyText, Test} = AZQD.comp;
const {debounce, throttle} = AZQD.lib;
```


---


## 示例

### getScroll组件使用：
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


### 元素观察器监听

#### 参数

| 参数名    | 类型   | 说明                                      |
| :-------- | :----- | ----------------------------------------- |
| elements  | NodeList | 必传 格式：document.querySelectorAll(".infoBox .infoItem")    |
| callback  | function | 非必传  |
| options   | object | 非必传 ratio:显示/隐藏比例；poll：节流时间；repeat：是否上报多次埋点 |

#### 示例

    watchExposure(document.querySelectorAll(".infoBox .infoItem"), function (res) {
          console.log('成功回调:', res);
        }, {
          ratio: 0.5, // 显示/隐藏比例，默认值：0.5，0.5即元素显示/隐藏50%时上报；
          poll: 100, // 节流时间，默认值：100ms；
          repeat: false, // 是否上报多次埋点，默认值：false，即：仅上报一次展示埋点；
      });

#### 返回

| 参数名 | 类型    | 说明  |
| :----- | :------ | ----- |
| index      | number | DOM元素在伪数组中的下标 |
| visibility | boolean| DOM元素是否显示 |
| item       | object | 监听dom节点信息 |

#### 备注

场景1.用于列表页每条数据上报一次展示埋点；
场景2.用于列表页每条数据上报多次展示、隐藏埋点；
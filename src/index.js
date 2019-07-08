import React, {Component} from 'react';
import qs from 'qs';
import './index.less'
import CopyText from './CopyText/index'

/**
 * 获取URL链接参数Object
 */

function urlQuery() {
  console.log('当前路由页面参数：', qs.parse(window.location.search, {ignoreQueryPrefix: true}));
  return qs.parse(window.location.search, {ignoreQueryPrefix: true});
}

class MyComponent extends Component{
  constructor(props) {
    super(props);
  }
  render(){
    return <div className="testBox">这是 MyComponent 组件1</div>
  }
}

export default {
  CopyText,
  urlQuery,
  MyComponent
}
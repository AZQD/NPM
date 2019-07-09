import React, {Component} from 'react';
import './index.less'

export default class MyComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="testBox">这是 Test 组件</div>
  }
}
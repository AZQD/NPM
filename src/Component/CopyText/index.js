/**
 * 复制文本组件
 *
 * 1.引入：
 *    import CopyText from '@src/common/CopyText/index';
 *
 * 2.应用：
 *    <CopyText copyConfig={this.copyConfig('我是复制的文本')} />
 *
 * 3.参数配置：
 *  copyConfig = (copyText) => ({
    copyText: copyText, // 必填，要复制的文本
    buttonText: '点我复制', // 非必填，默认为：复制
    className: 'right', // 非必填，默认为空
    callback: () => {
      console.log('复制文本成功了~');
    }
  });
 **/

import React, {Component} from 'react';
import ClipboardJS from 'clipboard';
import './index.less'

export default class CopyText extends Component {

  constructor(props) {
    super(props);
    this.clipboard = new ClipboardJS('.copy-btn');
    this.state = {}
  }

  componentWillMount() {
  }

  componentDidMount() {
    this.mounted = true; // 避免因为组件并没有装载上便开始执行setState({})
    let {copyConfig} = this.props;
    this.clipboard.on('success', (e) => {
      if (this.mounted) {
        copyConfig.callback && copyConfig.callback(); // 执行父组件回调函数
        e.clearSelection();
      }
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    let {copyConfig} = this.props;
    return (
      <React.Fragment>
        <span className={`copy-btn ${copyConfig.className || ''}`}
              data-clipboard-text={copyConfig.copyText}>{copyConfig.buttonText}</span>
      </React.Fragment>
    )
  }
}

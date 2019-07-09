import React from 'react'
import ReactDom from 'react-dom'
import './demo.less'
import {urlQuery, CopyText, Test} from '../src/index'

class Demo extends React.Component{

  copyConfig = (copyText) => ({
    copyText: copyText, // 必填，要复制的文本
    buttonText: '点我复制', // 非必填，默认为：复制
    className: 'right', // 非必填，默认为空
    callback: () => {
      console.log('复制文本成功了~');
    }
  });

  render() {
    return (
      <div>


        <h1>组件预览：</h1>
        <div className="partBox">

          {/*标题：*/}
          <div className="partItem bold">
            <div className="left">
              功能描述
            </div>
            <div className="right">
              组件示例
            </div>
          </div>

          <div className="partItem">
            <div className="left">
              Test：测试组件
            </div>
            <div className="right">
              <Test/>
            </div>
          </div>

          <div className="partItem">
            <div className="left">
              CopyText：复制文本组件
            </div>
            <div className="right">
              <CopyText copyConfig={this.copyConfig('我是复制的文本')}/>
            </div>
          </div>

        </div>


        <br/>
        <br/>


        <h1>util工具：</h1>
        <div className="partBox">

          {/*标题：*/}
          <div className="partItem bold">
            <div className="left">
              工具名称
            </div>
            <div className="right">
              工具说明
            </div>
          </div>

          <div className="partItem">
            <div className="left">
              urlQuery
            </div>
            <div className="right">
              获取URL中的参数
            </div>
          </div>

        </div>


      </div>
    )
  }
}

ReactDom.render(<Demo/>, document.getElementById("app"));
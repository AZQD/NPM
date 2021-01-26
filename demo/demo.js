import React from 'react'
import ReactDom from 'react-dom'
import './demo.less'

import AZQD from '../src/index' // 开发阶段使用
// import AZQD from '../dist/index' // 测试发包使用

const {CopyText, Test} = AZQD.comp;
const {urlQuery, getUa, loadScript, getScroll, debounce, throttle, watchExposure} = AZQD.lib;
// console.log(watchExposure);

class Demo extends React.Component {

    copyConfig = (copyText) => ({
        copyText: copyText, // 必填，要复制的文本
        buttonText: '点我复制', // 非必填，默认为：复制
        className: '', // 非必填，默认为空
        callback: () => {
            console.log('复制文本成功了~');
        }
    });

    render () {
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

                    <div className="partItem">
                        <div className="left">
                            getUa
                        </div>
                        <div className="right">
                            获取设备UA
                        </div>
                    </div>

                    <div className="partItem">
                        <div className="left">
                            loadScript
                        </div>
                        <div className="right">
                            动态加载js文件
                        </div>
                    </div>

                    <div className="partItem">
                        <div className="left">
                            getScroll
                        </div>
                        <div className="right">
                            获取页面滚动条距离顶部/底部的距离
                        </div>
                    </div>

                    <div className="partItem">
                        <div className="left">
                            debounce
                        </div>
                        <div className="right">
                            防抖（只执行一次）
                        </div>
                    </div>

                    <div className="partItem">
                        <div className="left">
                            throttle
                        </div>
                        <div className="right">
                            节流（每隔delay周期执行一次）
                        </div>
                    </div>

                    <div className="partItem">
                        <div className="left">
                            watchExposure
                        </div>
                        <div className="right">
                            元素观察器监听
                        </div>
                    </div>

                </div>


            </div>
        )
    }
}

ReactDom.render(<Demo/>, document.getElementById("app"));
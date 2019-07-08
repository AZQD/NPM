import React from 'react'
import ReactDom from 'react-dom'

import {urlQuery, CopyText, MyComponent} from '../src/index'
console.log(234, MyComponent);
// console.log(urlQuery, CopyText, MyComponent);

class Demo extends React.Component{

  render() {
    return (
      <div>
        <h1>组件预览:</h1>
        <MyComponent/>
      </div>
    )
  }
}

ReactDom.render(<Demo/>, document.getElementById("app"));
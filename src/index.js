import CopyText from './Component/CopyText/index'
import MyComponent from './Component/MyComponent/index'

import urlQuery from './util/urlQuery'

/**
 * 在es5中，用module.exports和exports导出模块，用require引入模块。
 * es6新增export和export default导出模块，import导入模块。
 */

/**
 * 第一种暴露方式
 */
export default {
  CopyText,
  urlQuery,
  MyComponent
}

/**
 * 第二种暴露方式
 */
module.exports.default = {
  CopyText,
  urlQuery,
  MyComponent
}
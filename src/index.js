/**
 * 组件
 */
import CopyText from './Component/CopyText/index'
import Test from './Component/Test/index'

/**
 * util
 */
import urlQuery from './util/urlQuery'
import getUa from './util/ua'


/**
 * 在es5中，用module.exports和exports导出模块，用require引入模块。
 * es6新增export和export default导出模块，import导入模块。
 */

/**
 * 第一种暴露方式
 */
export default {
  Test,
  CopyText,

  urlQuery,
  getUa
}

/**
 * 第二种暴露方式
 */
// exports.default = {
//   Test,
//   CopyText,
//
//   urlQuery,
//   getUa
// };
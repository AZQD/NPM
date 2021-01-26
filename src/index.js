/**
 * 组件
 */
import CopyText from './comp/CopyText/index'
import Test from './comp/Test/index'

const comp = {
    CopyText,
    Test,
};

/**
 * util
 */
import urlQuery from './lib/urlQuery'
import getUa from './lib/ua'
import loadScript from './lib/loadScript'
import getScroll from './lib/getScroll'
import debounce from './lib/debounce'
import throttle from './lib/throttle'
import watchExposure from './lib/watchExposure'

const lib = {
    urlQuery,
    getUa,
    loadScript,
    getScroll,
    debounce,
    throttle,
    watchExposure,
};


/**
 * 在es5中，用module.exports和exports导出模块，用require引入模块。
 * es6新增export和export default导出模块，import导入模块。
 */

/**
 * 第一种暴露方式
 */
export default {
    comp,
    lib
}

/**
 * 第二种暴露方式
 */
// exports.default = {
//     comp,
//     lib
// };
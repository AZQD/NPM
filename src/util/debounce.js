// 防抖（只执行一次）
/**
 * 定义：规定一个期限时间，在首次触发事件时，不立即执行回调函数，而是在期限时间后再执行，如果期限时间内回调函数被重复执行，则期限时间重新计时。
 * 应用：1.百度搜索输入框，延迟请求；2.window的scroll、resize事件调整窗口；
 */
function debounce (fn, delay) {
    let timer = null;
    return function () {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn, delay)
    }
}

module.exports = debounce;
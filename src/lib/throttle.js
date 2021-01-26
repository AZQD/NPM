// 节流（每隔delay周期执行一次）
/**
 * 规定一个期限时间，在该时间内，触发事件的回调函数只能执行一次，如果期限时间内回调函数被多次触发，则只有一次能生效。
 * 应用：1.监听滚动条加载更多；
 */
function throttle (fn, delay) {
    let timer = null;
    return function () {
        if (!timer) {
            timer = setTimeout(function () {
                fn();
                timer = null;
            }, delay);
        }
    }
}

module.exports = throttle;
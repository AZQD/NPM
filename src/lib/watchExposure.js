// 不能删，解决问题：polyfill插件，解决IntersectionObserver API兼容性问题
import intersection from 'intersection-observer';

/**
 * 元素观察器监听
 *
 *
 * @param elements 元素伪数组（必填）；
 * 例如：DOM结构为：
 <div class="infoBox">
 <div class="infoItem">1</div>
 <div class="infoItem">2</div>
 <div class="infoItem">3</div>
 </div>
 *      传参方式：document.querySelectorAll(".infoBox .infoItem")；
 *
 *
 * @param callback 成功回调（非必填）；
 * 返回值：
 *       index：DOM元素在伪数组中的下标；
 *       visibility：DOM元素是否显示；（true：显示埋点；false：隐藏埋点；）
 *       item：监听dom节点信息；
 *
 *
 * @param options  配置参数（非必填）；
 *        ratio：显示/隐藏比例，默认值：0.5，0.5即元素显示/隐藏50%时上报；
 *        poll：节流时间，默认值：100ms；
 *        repeat：是否上报多次埋点，默认值：false，即：仅上报一次展示埋点；
 *
 *
 * 调用示例：
 * watchExposure(document.querySelectorAll(".infoBox .infoItem"), function (res) {
          console.log('成功回调:', res);
        }, {
          ratio: 0.5, // 显示/隐藏比例，默认值：0.5，0.5即元素显示/隐藏50%时上报；
          poll: 100, // 节流时间，默认值：100ms；
          repeat: false, // 是否上报多次埋点，默认值：false，即：仅上报一次展示埋点；
      });
 *
 *
 */

export default function watchExposure (elements, callback, options = {}) {
    try {
        const {ratio = 0.5, poll = 100, repeat = false} = options; // 配置数据
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((item) => {

                const index = Number(item.target.getAttribute('idx')); // DOM元素在伪数组中的下标
                const visibility = item.intersectionRatio >= ratio; // DOM元素是否显示
                // console.log(visibility ? '显示' : '不显示', item.intersectionRatio);
                const {hasLog = false} = item.target.dataset;
                let res = {
                    index,
                    item,
                    visibility
                };

                // hasLog默认为undefined，如果初次展示，则统计上报，并将hasLog置为true；否则return;
                if (!hasLog && visibility) { // 第一次进入可视区域执行，只会执行一次
                    item.target.dataset.hasLog = true;

                    if (!repeat) { // 如果仅展示时上报一次埋点
                        observer.unobserve(item.target); // 上报完埋点，停止监听该DOM节点，优化性能；
                    }
                    callback && callback(res);
                    return;
                }

                hasLog && callback && callback(res); // 第一次进入可视区域之后的逻辑

            });
        }, {
            threshold: [ratio] // 一个包含阈值的列表, 按升序排列, 列表中的每个阈值都是监听对象的交叉区域与边界区域的比率。
        });

        observer.POLL_INTERVAL = poll; // 节流时间为100毫秒

        Array.from(elements).forEach((el, idx) => {
            // 分页情况下，如果再次调用该方法，则对同一个DOM，不再重复监听；
            if (el.getAttribute('observer')) {
                return;
            }
            el.setAttribute('idx', idx);
            el.setAttribute('observer', true);
            return observer.observe(el);
        });
    } catch (e) {
        console.log('元素观察器监听异常', e);
    }
}
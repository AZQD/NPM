/**
 * 获取URL链接参数Object
 */
import qs from 'qs';

function urlQuery() {
  console.log('当前路由页面参数：', qs.parse(window.location.search, {ignoreQueryPrefix: true}));
  return qs.parse(window.location.search, {ignoreQueryPrefix: true});
}

module.exports = urlQuery;
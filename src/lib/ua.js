/**
 * @module 获取ua
 * @description 获取ua
 */
export default function getUa () {
    let ua = navigator.userAgent;
    return {
        wx: ua.match(/MicroMessenger\/([\d.]+)/),   // 微信
        ios: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        android: ua.indexOf('Android') > -1 || ua.indexOf('Linux') > -1,
        iPhone: ua.indexOf('iPhone') > -1,
        iPad: ua.indexOf('iPad') > -1,
        qq: ua.match(/QQ\/([\d.]+)/),
        iPhoneX: (ua.indexOf('iphonex') > -1) || ((ua.indexOf('iPhone') > -1) && (screen.height === 812 || screen.height === 896))
    };
}

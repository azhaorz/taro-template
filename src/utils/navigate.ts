import Taro from '@tarojs/taro';
import Tip from './tip';

// const { TARO_ENV } = process.env;

/**
 * 普通路由跳转
 * @param {string} path 路由地址
 */
export function navTo(path: string) {
  Taro.navigateTo({ url: path });
}
/**
 * 获取当前路由地址
 */
export function getCurrentPath() {
  const pages = Taro.getCurrentPages();
  return pages[pages.length - 1]['route'];
}
/**
 * 判断是否有上一页
 */
export function isHasPrePage() {
  return Taro.getCurrentPages().length > 1;
}
/**
 * 跳转小程序
 * @param {string} appId 小程序appId
 * @param {*} path 跳转路径
 */
export function navToMiniProgram(appId: string, path: string) {
  // TODO: 需要跨端处理
  Taro.navigateToMiniProgram({
    appId: appId,
    path: path,
  });

  // Tip.single('请前往微信搜索“xxx”小程序，体验此功能', '跳转小程序功能仅在小程序端可用');
}
/**
 * 跳转客服消息
 */
export function navToContactInfo() {
  // TODO: 需要跨端处理
  Tip.single('请前往微信搜索“xxx小程序，体验此功能', '客服消息功能仅在小程序端可用');
}

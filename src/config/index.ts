import { merge } from 'lodash-es';
import dev from './dev';
import prod from './prod';
import uris from './uris';

const config = {
  uris,
  // tip配置
  tip: {
    // 确认按钮颜色
    confirmColor: '#0077FF',
    // 取消按钮颜色
    cancelColor: '#333333',
  },
  // 颜色
  color: {
    theme: '#129d7b',
  },
  // 请求配置
  request: {
    baseUrl: '',
    header: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    timeout: 10000,
    custom: {
      // loading类型
      loadingType: 'normal',
      // 是否需要授权认证
      isAuth: true,
      // 需要跳转的登录地址
      loginPath: '/pages/login/act-pwd',
    },
  },
};

console.log(process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
  merge(config, dev);
  console.log('开发环境');
} else {
  merge(config, prod);
  console.log('生产环境');
}

export default config;

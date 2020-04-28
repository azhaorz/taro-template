import Taro from '@tarojs/taro';
import { merge } from 'lodash-es';
import config from '@/config';
import interceptors from './interceptors';

interceptors.forEach(interceptorItem => Taro.addInterceptor(interceptorItem));

class HttpRequest {
  baseOptions(params: any, method = 'GET') {
    params.method = method;
    merge(params, config.request);
    return Taro.request(params);
  }

  get(url: string, data = {}, options = {}) {
    const params = { url, data, ...options };
    return this.baseOptions(params);
  }

  post(url: string, data = {}, options = {}) {
    const params = { url, data, ...options };
    return this.baseOptions(params, 'POST');
  }

  put(url: string, data = {}, options = {}) {
    const params = { url, data, options };
    return this.baseOptions(params, 'PUT');
  }

  delete(url: string, data = {}, options = {}) {
    const params = { url, data, ...options };
    return this.baseOptions(params, 'DELETE');
  }
}

export default new HttpRequest();

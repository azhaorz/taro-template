import Taro from '@tarojs/taro'
import HTTP_STATUS from './http_status'

const customInterceptor = (chain: Taro.Chain): any => {
  const requestParams = chain.requestParams
  requestParams.url = requestParams.baseUrl + requestParams.url
  console.log(requestParams)

  return chain.proceed(requestParams).then(res => {
    console.log(requestParams, '111111111111')
    const { statusCode, data } = res
    const { code, msg } = data
    // 只要请求成功，不管返回什么状态码，都走这个回调
    if (statusCode === HTTP_STATUS.NOT_FOUND) {
      return Promise.reject('请求资源不存在')
    } else if (statusCode === HTTP_STATUS.BAD_GATEWAY) {
      return Promise.reject('服务端出现了问题')
    } else if (statusCode === HTTP_STATUS.FORBIDDEN) {
      // TODO 根据自身业务修改
      return Promise.reject('没有权限访问')
    } else if (statusCode === HTTP_STATUS.AUTHENTICATE) {
      return Promise.reject('需要鉴权')
    } else if (statusCode === HTTP_STATUS.SUCCESS) {
      // code === 0 才是请求成功
      if (code === 0) {
        return data
      } else {
        return Promise.reject(msg)
      }
    }
  })
}

// Taro 提供了两个内置拦截器
// logInterceptor - 用于打印请求的相关信息
// timeoutInterceptor - 在请求超时时抛出错误。
const interceptors = [customInterceptor, Taro.interceptors.logInterceptor]

export default interceptors

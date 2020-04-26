import request from '@/utils/request'
import uris from '@/config/uris'

export function apiGetDemo1() {
  console.log('apiGetDemo1')
  return request.get(uris.demo.api1)
}
export function apiGetDemo2() {
  console.log('apiGetDemo2')
  return request.get(uris.demo.api2)
}

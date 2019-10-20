import request from '@/utils/request'

/**
 * get params url 会有 ?user=1&pass=2
 * post data
 */

export function getBanner () {
  return request({
    url: '/banner',
    method: 'get'
  })
}
export function getNav () {
  return request({
    url: '/nav',
    method: 'get'
    // proxytype: 'socks5',
    // proxy: '192.168.31.163:3000'
  })
}

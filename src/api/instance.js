import request from '@/utils/request'

export function log (str) {
  console.log.apply(console, arguments)
}

/**
 * get params url 会有 ?user=1&pass=2
 * post data
 */
export function getCity () {
  return request({
    url: '/json/city.json',
    method: 'get'
    // params: data
  })
}
export function logIn (data) {
  return request({
    url: '/user',
    method: 'post',
    data: data
  })
}

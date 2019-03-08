import request from '@/utils/request'

export function regUserId (data) {
  return request({
    url: '/reg/reg',
    method: 'post',
    data: data
  })
}

import axios from 'axios'
import qs from 'qs'

// create an axios instance
const service = axios.create({
  baseURL: 'http://192.168.31.163:3000', // api的base_url
  timeout: 10000 // request timeout
  // headers: {
  //   'lk-auth': 'lk-admin '
  // }
})

// 发送请求前对请求数据进行处理
service.defaults.transformRequest = [function (data) {
  /**
   *axios 默认请求 context-type application/json
   * 后台需要 @request body 进行处理
   * 这里统一使用 qs  格式化数据
   */
  return qs.stringify(data)
  // return data
}]

// 请求拦截器
service.interceptors.request.use(
  config => {
    // config.withCredentials = true
    // config.headers['Authorization'] = 'Admin-Token'
    // do something before request is sent
    return config
  }, error => {
    // do something with request error
    Promise.reject(error)
  }
)
// 响应拦截器
service.interceptors.response.use(
  res => res.data,
  err => Promise.reject(err)
)

export default service

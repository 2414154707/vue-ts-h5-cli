/*
 * @Author: hdq
 * @Date: 2023-06-29 23:10:37
 * @Last Modified by: hdq
 * @Last Modified time: 2023-06-30 19:38:13
 */

// @ts-nocheck
import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios'
import { showToast } from 'vant'
// 创建axios请求实例
const request: AxiosInstance = axios.create({
  // 请求3000延时失效
  timeout: 3000
})

// 请求拦截
request.interceptors.request.use(
  // 必须返回config配置对象
  (config: any) => {
    // 本地存储获得TOKEN添加到请求头

    // 设置请求头的请求类型为JSON
    // 一般情况下服务端响应前端的数据一般是JSON|XML
    // 其他的请求头包含FORMDATA
    config.headers['Content-Type'] = 'application/json'
    if (localStorage.getItem('TOKEN')) {
      const Authorization = localStorage.getItem('TOKEN')
      config.headers['Authorization'] = `${Authorization}`
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)
// 响应拦截
request.interceptors.response.use(
  (response: AxiosResponse) => {
    return Promise.resolve(response)
  },
  (error: AxiosError) => {
    const status = error.response?.status
    switch (status) {
      case 401:
        showToast({
          type: 'fail',
          message: error.response?.data.msg || '暂无数据！',
          onClose() {
            const pathUrl = location.href.split('/')
            window.location.href = `/user/login?redirect=${encodeURIComponent('/' + pathUrl[3])}`
          }
        })
        break
      case 406:
        // Toast.fail(error.response?.data.msg || '暂无数据！', 1)
        showToast({
          type: 'fail',
          message: error.response?.data.msg || '暂无数据！'
        })
        break
      case 500:
        showToast({
          type: 'fail',
          message: error.response?.data.msg || '服务端报错,请重启再试！'
        })
        break
      default:
        showToast({
          type: 'fail',
          message: '未知错误，请刷新页面'
        })
        break
    }
    return Promise.reject(error)
  }
)

export { request, axios }

import axios from "axios";
import { Loading } from 'element-ui';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api的base_url
  timeout: 5000 * 8 // 请求超时时间
})

let loading = null

// request拦截器
service.interceptors.request.use(
  config => {
    loading = Loading.service({
      lock: true,
      text: '拼命加载中',
      spinner: 'el-icon-loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
    // const token = ''
    // if (token) {
    //   config.headers.Authorization = token // 请求头部添加token
    // }
    return config
  },
  error => { // Do something with request error
    console.log(error);
    Promise.reject(error);
  }
)
// response拦截器
service.interceptors.response.use(
  response => {
    if (loading) {
      loading.close()
    }
    const res = response.data
    /**
     * code为非2000是抛错 可结合自己业务进行修改
     */

    return res
  },
  error => {
    if (loading) {
      loading.close()
    }
    return Promise.reject(error)
  }
)

export default service

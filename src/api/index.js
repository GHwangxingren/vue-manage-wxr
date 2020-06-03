import request from "@/utils/fetch";

/**
 * 测试fastmock post
 * @param {*}
 */
export function postApi(data) {
  return request({
      url: '',
      method: 'post',
      data
  })
}

/**
 * 测试fastmock get
 * @param {*}
 */
export function getApi(params) {
  return request({
      url: '',
      method: 'get',
      params
  })
}

/**
 * 登录
 * @param {username} 用户名
 * @param {password} 密码
 */
export function loginApi(data) {
  return request({
      url: '/login',
      method: 'post',
      data
  })
}

/**
 * 获取权限信息
 */
export function getRolesApi() {
  return request({
      url: '/getRoutes',
      method: 'get'
  })
}


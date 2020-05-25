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
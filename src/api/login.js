import request from '@/utils/request'

export function login(username, password) {
  return request({
    url: '/crawlerservice/admininstrator/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export function getInfo(token) {
  return request({
    url: '/crawlerservice/admininstrator/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/crawlerservice/admininstrator/logout',
    method: 'post'
  })
}

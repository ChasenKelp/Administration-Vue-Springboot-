import request from '@/utils/request'

// 查询招人名额列表
export function listHirenum(query) {
  return request({
    url: '/hirenum/list',
    method: 'get',
    params: query
  })
}

// 查询招人名额详细
export function getHirenum(id) {
  return request({
    url: '/hirenum/' + id,
    method: 'get'
  })
}

// 新增招人名额
export function addHirenum(data) {
  return request({
    url: '/hirenum',
    method: 'post',
    data: data
  })
}

// 修改招人名额
export function updateHirenum(data) {
  return request({
    url: '/hirenum',
    method: 'put',
    data: data
  })
}

// 删除招人名额
export function delHirenum(id) {
  return request({
    url: '/hirenum/' + id,
    method: 'delete'
  })
}

import request from '@/utils/request'

// 查询薪资标准管理列表
export function listSalary_level(query) {
  return request({
    url: '/salary_level/list',
    method: 'get',
    params: query
  })
}

// 查询薪资标准管理详细
export function getSalary_level(id) {
  return request({
    url: '/salary_level/' + id,
    method: 'get'
  })
}

// 新增薪资标准管理
export function addSalary_level(data) {
  return request({
    url: '/salary_level',
    method: 'post',
    data: data
  })
}

// 修改薪资标准管理
export function updateSalary_level(data) {
  return request({
    url: '/salary_level',
    method: 'put',
    data: data
  })
}

// 删除薪资标准管理
export function delSalary_level(id) {
  return request({
    url: '/salary_level/' + id,
    method: 'delete'
  })
}

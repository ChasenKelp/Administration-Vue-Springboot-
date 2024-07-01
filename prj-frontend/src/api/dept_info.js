import request from '@/utils/request'

// 查询部门信息管理列表
export function listDept_info(query) {
  return request({
    url: '/dept_info/list',
    method: 'get',
    params: query
  })
}

// 查询部门信息管理详细
export function getDept_info(id) {
  return request({
    url: '/dept_info/' + id,
    method: 'get'
  })
}

// 新增部门信息管理
export function addDept_info(data) {
  return request({
    url: '/dept_info',
    method: 'post',
    data: data
  })
}

// 修改部门信息管理
export function updateDept_info(data) {
  return request({
    url: '/dept_info',
    method: 'put',
    data: data
  })
}

// 删除部门信息管理
export function delDept_info(id) {
  return request({
    url: '/dept_info/' + id,
    method: 'delete'
  })
}

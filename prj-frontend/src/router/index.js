import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
/* Layout */
import Layout from '@/layout'
// 公共路由
export const constantRoutes = [
  {
    path: '',
    component: Layout,
    redirect: '/index',
    children: [
      {
        path: '/index',
        component: (resolve) => require(['@/views/index'], resolve),
        name: 'Index',
        meta: { title: '首页', isFixed: true }
      }
    ]
  },
   {
      path: '',
      component: Layout,
      name: '部门信息管理',
      meta: { title: '部门信息管理' },
      children: [
            {
              path: '/dept_info',
              component: (resolve) => require(['@/views/dept_info/index.vue'], resolve),
              name: '部门信息管理',
              meta: { title: '部门信息管理' }
            }
          ]
    },
    {
              path: '',
              component: Layout,
              name: '信息管理',
              meta: { title: '信息管理' },
              children: [
              {
                path: '/salary_level',
                component: (resolve) => require(['@/views/salary_level/index.vue'], resolve),
                name: '薪资标准管理',
                meta: { title: '薪资标准管理' }
              }
            ]
        },
        {
            path: '',
            component: Layout,
            name: '信息管理',
            meta: { title: '信息管理' },
            children: [
            {
              path: '/hirenum',
              component: (resolve) => require(['@/views/hirenum/index.vue'], resolve),
              name: '招人名额管理',
              meta: { title: '招人名额管理' }
            }
          ]
        },
        {
            path: '',
            component: Layout,
            name: '员工管理',
            meta: { title: '员工管理' },
            children: [
            {
              path: '/employee',
              component: (resolve) => require(['@/views/employee/index.vue'], resolve),
              name: '员工信息管理',
              meta: { title: '员工信息管理' }
            }
          ]
        },
        {
            path: '',
            component: Layout,
            name: '员工管理',
            meta: { title: '员工管理' },
            children: [
            {
              path: '/employee_kpi',
              component: (resolve) => require(['@/views/employee_kpi/index.vue'], resolve),
              name: '员工评价管理',
              meta: { title: '员工评价管理' }
            }
          ]
        },
  {
    path: '/login',
    component: (resolve) => require(['@/views/login'], resolve),
    hidden: true
  },
  
]

export default new Router({
  routes: constantRoutes
})

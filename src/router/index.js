import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


/**
 * 路由相关属性说明
 * hidden: 当设置hidden为true时，意思不在sideBars侧边栏中显示
 * mete{
 * title: xxx,  设置sideBars侧边栏名称
 * icon: xxx,  设置ideBars侧边栏图标
 * noCache: true  当设置为true时不缓存该路由页面
 * }
 */
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login'),
    meta: { title: '登录页' },
    hidden: true
  },
  {
    path: '*',
    redirect: '/404'
  }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Layout,
  //   redirect: '/dashbord',
  //   children: [
  //     {
  //       path: 'dashbord',
  //       name: 'Dashbord',
  //       component: () => import('@/views/dashboard'),
  //       meta: { title: '首页', icon: 'el-icon-s-data' }
  //     }
  //   ]
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

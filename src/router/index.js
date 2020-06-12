import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";
import store from "@/store";

//此VueRouter是自己自定义引入暴露出来的，即是自定义的，以下的VueRouter同样是这样
// 解决两次访问相同路由地址报错
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

Vue.use(VueRouter);

/**
 * 路由相关属性说明
 * hidden: 当设置hidden为true时，意思不在sideBars侧边栏中显示
 * mete{
 * title: xxx,  设置sideBars侧边栏名称
 * icon: xxx,  设置ideBars侧边栏图标
 * noCache: true  当设置为true时不缓存该路由页面
 * }
 */

// 通用路由
export const routes = [
  // {
  //   path: '/',
  //   redirect: '/home',
  //   hidden: true
  // },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/Login/index"),
    meta: { title: "登录页" },
    hidden: true
  },
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "HomePage",
        component: () => import("@/views/HomePage/index"),
        meta: {
          title: "系统首页",
          icon: "el-icon-s-data"
        }
      }
    ]
  },
  {
    path: "/driver",
    component: Layout,
    redirect: "/driver/index",
    children: [
      {
        path: "index",
        name: "Driver",
        component: () => import("@/views/Driver/index"),
        meta: {
          title: "引导页",
          icon: "el-icon-aim"
        }
      }
    ]
  },
  {
    path: "/icon",
    component: Layout,
    redirect: "/icon/index",
    children: [
      {
        path: "index",
        name: "Icons",
        component: () => import("@/views/Icons/index"),
        meta: {
          title: "Icons图标",
          icon: "el-icon-picture-outline"
        }
      }
    ]
  },
  {
    path: "/error",
    component: Layout,
    name: "Error",
    redirect: "/error/404",
    children: [
      {
        path: "404",
        name: "Page404",
        component: () => import("@/views/Error/404"),
        meta: { title: "Error", icon: "el-icon-s-release" }
      }
    ]
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/Error/404"),
    hidden: true
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true
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
];

// 动态添加路由
export const asyncRoutes = [];

const createRouter = () => {
  return new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
      return { x: 0, y: 0 };
    }
  });
};

const router = createRouter();

// 路由守卫
router.beforeEach(async (to, form, next) => {
  document.title = to.meta.title;
  if (to.path === "/login") {
    next();
  } else {
    if (store.getters.token) {
      const hasRoles = store.getters.roles.length > 0;
      if (hasRoles) {
        next();
      } else {
        try {
          const { roles } = await store.dispatch("user/_getRoles");
          const addRoutes = await store.dispatch("permission/getAsyncRoutes", roles);
          router.addRoutes(addRoutes);

          // hack method to ensure that addRoutes is complete
          // set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true });
        } catch (error) {
          this.$message.error(error);
        }
      }
    } else {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath
        }
      });
    }
  }
});

export default router;

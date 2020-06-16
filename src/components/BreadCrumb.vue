<template>
  <div class="bread-crumb" id="bread-crumb">
    <el-breadcrumb class="crumb" separator-class="el-icon-arrow-right">
      <el-breadcrumb-item v-for="item in crumbList" :key="item.path" :to="item.path">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { hasOnlyChild } from "@/utils/common.js";

export default {
  name: "breadCrumb",
  data() {
    return {
      crumbList: []
    };
  },
  watch: {
    $route: {
      handler(val) {
        this.getBreadcrumb(val);
      },
      immediate: true
    }
  },
  methods: {
    hasOnlyChild(children = [], item) {
      hasOnlyChild(children, item);
    },
    getBreadcrumb(route) {
      let matched = route.matched.filter(item => {
        if (item.meta && item.meta.title) {
          item.path = "";

          return true;
        }
      });
      const isHome = matched[0];

      //如果不是首页
      if (isHome && isHome.name !== "HomePage") {
        matched = [{ path: "/home", meta: { title: "系统首页" } }].concat(matched);
      }

      this.crumbList = matched;
    }
  }
};
</script>

<style lang="less">
.bread-crumb {
  .el-breadcrumb__item {
    &:last-child {
      .el-breadcrumb__inner {
        color: #ffccff;
      }
    }
  }

  .el-breadcrumb__inner {
    color: var(--white-color);

    &.is-link {
      color: var(--white-color);
    }
  }
}
</style>

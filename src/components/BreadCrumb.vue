<template>
  <div class="bread-crumb">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'breadCrumb',
  data() {
    return {
      crumbList: []
    }
  },
  // getBreadcrumb() {
  //  let matched = this.$route.matched;
  //  //如果不是首页
  //  if (!this.isHome(matched[0])) {
  //   matched = [{ path: "/home", meta: { title: "首页" } }].concat(matched);
  //  }
  //  this.breadList = matched;
  // }
  // watch: {
  //   $route: {
  //     handler(val) {
  //       console.log(val)
  //     }
  //   }
  // }
}
</script>

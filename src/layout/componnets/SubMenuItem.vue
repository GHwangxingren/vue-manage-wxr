<template>
  <div>
    <!--这个表示有子菜单的情况下，才会显示-->
    <el-submenu :index="item.path" v-if="item.children && item.children.length>0">
      <template slot="title">
        <i class="icon" :class="item.icon"></i>
        <span slot="title">{{item.title}}</span>
      </template>
      <template v-for="(routePath,index) in item.children">
        <sub-menu-item
          :item="routePath"
          :key="index"
          v-if="routePath.children && routePath.children.length>0"
        ></sub-menu-item>
        <el-menu-item v-else :index="item.path+'/'+routePath.path" :key="index">
          <i class="icon" :class="routePath.icon"></i>
          <span  slot="title">{{routePath.title}}</span>
        </el-menu-item>
      </template>
    </el-submenu>

    <!--表示一级菜单-->
    <el-menu-item v-else :index="item.path">
      <i class="icon" :class="item.icon"></i>
      <span slot="title">{{item.title}}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: 'subMenuItem',
  props: ['item']
}
</script>

<style lang="less" scoped>
.icon {
  margin-right: 5px;
  font-size: 18px;
}
</style>

<style lang="less">
// 解决el-menu（ul）嵌套此组件，第一层不是li所造成的多级不收起的bug
.el-menu--collapse .el-menu-item span, .el-menu--collapse .el-submenu .el-submenu__title span {
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    display: inline-block;
}
.el-menu--collapse .el-menu-item .el-submenu__icon-arrow, .el-menu--collapse .el-submenu .el-submenu__title .el-submenu__icon-arrow {
    display: none;
}
</style>

<template>
  <div v-if="!subItem.hidden">
    <!--这个表示有子菜单的情况下，才会显示-->
    <el-submenu :index="subItem.path" v-if="!isFirstLevel(subItem.children, subItem)">
      <template slot="title">
        <i class="icon" :class="subItem.meta.icon"></i>
        <span slot="title">{{subItem.meta.title}}</span>
      </template>
      <template v-for="(routePath, index) in subItem.children">
        <sub-menu-item
          :subItem="routePath"
          :key="index"
          v-if="routePath.children && routePath.children.length>0"
        ></sub-menu-item>
        <el-menu-item v-else :index="resolvePath(subItem.path, routePath.path)" :key="index">
          <i class="icon" :class="routePath.meta.icon"></i>
          <span  slot="title">{{routePath.meta.title}}</span>
        </el-menu-item>
      </template>
    </el-submenu>

    <!--表示一级菜单-->
    <el-menu-item v-else :index="resolvePath(subItem.path, subItem.children[0].path)">
      <i class="icon" :class="subItem.children[0].meta.icon"></i>
      <span slot="title">{{subItem.children[0].meta.title}}</span>
    </el-menu-item>
  </div>
</template>

<script>
import path from 'path';
export default {
  name: 'subMenuItem',
  props: ['subItem'],
  methods: {
    isFirstLevel(children = [], item) {
      let _aChildren = children.filter(item => {
        return item.hidden ? false : true;
      })
      // 只有一个子，自身没有meta属性，说明是一级
      if (!_aChildren.length === 1 && !item.meta) {
        return true
      }
      // 没有子，说明是一级
      if (!_aChildren.children) {
        return true
      }
      return false
    },
    resolvePath(basePath, curPath) {
      return path.join(basePath, curPath)
    }
  }
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

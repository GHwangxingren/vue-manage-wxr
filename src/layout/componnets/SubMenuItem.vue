<template>
  <div v-if="!subItem.hidden">
    <!--这个表示有子菜单的情况下，才会显示-->
    <el-submenu :index="subItem.path" v-if="!hasOnlyChild(subItem.children, subItem)">
      <template slot="title">
        <i class="icon" :class="subItem.meta.icon"></i>
        <span slot="title">{{ subItem.meta.title }}</span>
      </template>
      <template v-for="(routePath, index) in subItem.children">
        <sub-menu-item
          :sub-item="routePath"
          :key="index"
          v-if="routePath.children && routePath.children.length > 0"
          :base-path="resolvePath(routePath.path)"
        ></sub-menu-item>
        <el-menu-item v-else :index="resolvePath(routePath.path)" :key="index">
          <i class="icon" :class="routePath.meta.icon"></i>
          <span slot="title">{{ routePath.meta.title }}</span>
        </el-menu-item>
      </template>
    </el-submenu>

    <!--表示一级菜单-->
    <el-menu-item v-else :index="resolvePath(subItem.children[0].path)">
      <i class="icon" :class="subItem.children[0].meta.icon"></i>
      <span slot="title">{{ subItem.children[0].meta.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
import path from "path";
import { hasOnlyChild } from "@/utils/common.js";

export default {
  name: "subMenuItem",
  props: ["subItem", "basePath"],
  methods: {
    hasOnlyChild(children = [], item) {
      return hasOnlyChild(children, item);
    },
    resolvePath(curPath) {
      return path.join(this.basePath, curPath);
    }
  }
};
</script>

<style lang="less" scoped>
.icon {
  margin-right: 5px;
  font-size: 18px;
}
</style>

<style lang="less">
// 解决el-menu（ul）嵌套此组件，第一层不是li所造成的多级不收起的bug
.el-menu--collapse .el-menu-item span,
.el-menu--collapse .el-submenu .el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
.el-menu--collapse .el-menu-item .el-submenu__icon-arrow,
.el-menu--collapse .el-submenu .el-submenu__title .el-submenu__icon-arrow {
  display: none;
}
</style>

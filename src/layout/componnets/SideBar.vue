<template>
  <div class="side-bar" id="side-bar">
    <!-- <el-scrollbar> -->
    <el-menu
      :default-active="activeRoute"
      class="el-menu-vertical-demo"
      :collapse="collapse"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <sub-menu v-for="(item, index) in routes" :sub-item="item" :key="index"></sub-menu>
    </el-menu>
    <!-- </el-scrollbar> -->
  </div>
</template>

<script>
import SubMenu from "./SubMenuItem";
import { mapGetters } from "vuex";
export default {
  name: "SideBar",
  components: {
    SubMenu
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["routes", "collapse"]),
    activeRoute() {
      return this.$route.path;
    }
  }
};
</script>

<style lang="less" scoped>
.side-bar {
  width: 200px;
  height: calc(100vh - 70px);

  .el-menu {
    height: 100%;
    border: none;
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
}
</style>

<template>
  <div class="side-bar">
    <el-scrollbar>
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
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
// import subMenu from './SubMenuItem';
export default {
  name: 'sideBar',
  components: {
    // subMenu
  },
  data() {
    return {
      collapse: false,
    }
  },
  computed: {
    activeRoute() {
      return this.$route.path.replace('/', '');
    }
  },
  methods: {
    
  }
}
</script>

<style lang="less">
.side-bar {
  width: 200px;
  .el-scrollbar {
      height: 100%;
      .el-scrollbar__wrap {
        overflow-x: auto;
      }
    }
}
</style>
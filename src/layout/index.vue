<template>
  <div class="layout">
    <!-- header -->
    <v-header />
    <!-- sidebar -->
    <side-bar />
    <div class="content-box" :class="{'content-collapse': collapse}">
      <!-- <v-tags></v-tags> -->
      <div class="content">
        <transition name="fade-page" mode="out-in">
          <!-- <keep-alive :include="$store.state.tagsList.tagsList"> -->
          <!-- <keep-alive> -->
            <router-view></router-view>
          <!-- </keep-alive> -->
        </transition>
        <el-backtop target=".content"></el-backtop>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from './componnets/SideBar';
import vHeader from './componnets/Header';
export default {
  name: 'Layout',
  components: {
    SideBar,
    vHeader
  },
  data() {
    return {
      collapse: false
    }
  }
}
</script>

<style lang="less" scoped>
.content-box {
  position: absolute;
  left: 250px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding-bottom: 30px;
  -webkit-transition: left 0.3s ease-in-out;
  transition: left 0.3s ease-in-out;
  background: #f0f0f0;
  .content {
    width: auto;
    height: 100%;
    padding: 10px;
    overflow-y: scroll;
    box-sizing: border-box;
  }
}

.content-collapse {
  left: 65px;
}
</style>
<template>
  <div class="header">
    <div class="header-left">
      <a href="javascript:;" class="logo-link">
        <img src="../../assets/images/logo.jpg" alt="">
        <p>Almond</p>
      </a>
      <div class="hr-l">
        <div class="collapse" id="collapse" @click="setCollapse">
          <i :class="collapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
        </div>
        <bread-crumb />
      </div>
    </div>
    <div class="header-right">
      <div class="hr-r">
        <ul>
          <li id="full-page" @click="handleFullScreen">
            <el-tooltip effect="dark" content="进入全屏" placement="bottom">
              <i class="el-icon-full-screen" style="color: #FFF"></i>
            </el-tooltip>
          </li>
          <li id="message">
            <el-tooltip el-tooltip effect="dark" content="消息" placement="bottom">
              <el-badge :value="bellNum">
                <i class="el-icon-bell" style="color: #FFF"></i>
              </el-badge>
            </el-tooltip>
          </li>
          <li class="avatar-item">
            <el-avatar :size="50" :src="avatarUrl"></el-avatar>
          </li>
          <li>
            <el-dropdown size="small" trigger="click" class="drop-down" @command="handleCommand"> 
              <span>
                {{ username }}
                <i class="el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="1">项目仓库</el-dropdown-item>
                <el-dropdown-item command="2">退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb';
import { mapActions, mapMutations, mapGetters } from 'vuex';

export default {
  name: 'vHeader',
  components: {
    BreadCrumb
  },
  data() {
    return {
      fullscreen: false,
      bellNum: 5,
      username: 'Almand',
      avatarUrl: 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
    }
  },
  computed: {
    ...mapGetters(['collapse'])
  },
  mounted() {},
  methods: {
    ...mapActions({
      loginOut: 'user/loginOut'
    }),
    ...mapMutations({
      changeCollapse: 'app/changeCollapse'
    }),
    handleCommand(type) {
      if (type === '1') {
        window.open('https://github.com/GHwangxingren/vue-manage-wxr');

        return;
      }

      this.loginOut();
    },
    setCollapse() {
      this.changeCollapse()
    },
    // 全屏的进入与退出
    handleFullScreen() {
      let element = document.documentElement;

      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }

      this.fullscreen = !this.fullscreen;
    }
  }
}
</script>

<style lang="less" scoped>
.header {
  &:extend(.flex-between);
  height: 70px;
  background-color: var(--header-color);
  
  i {
    color: var(--white-color);
    font-size: 20px;
    cursor: pointer;
  }

  .header-left {
    &:extend(.flex-align-center);

    .logo-link {
      &:extend(.flex-center);
      width: 200px;

      img {
        width: 40px;
        height: 40px;
      }

      p {
        color: #FFF;
        font-size: 18px;
        font-weight: bold;
        margin-left: 10px;
      }
    }

    .hr-l {
      &:extend(.flex-align-center);

      .collapse {
        margin-right: 30px;
      }
    }
  }

  .header-right {
    .hr-r {
      
      ul {
        &:extend(.flex-align-center);

        li {
          margin-right: 40px;

          .drop-down {
            color: var(--white-color);
            cursor: pointer;
          }

          &.avatar-item {
            margin-right: 20px;
          }
          
        }
      }
    }
  }
}
</style>
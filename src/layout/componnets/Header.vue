<template>
  <div class="header">
    <div class="header-left">
      <a href="javascript:;" class="logo-link">
        <img src="../../assets/images/logo.jpg" alt="">
        <p>Almond</p>
      </a>
    </div>
    <div class="header-right">
      <div class="hr-l">
        <div class="collapse">
          <i :class="collapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'"></i>
        </div>
        <bread-crumb />
      </div>
      <div class="hr-r"></div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb';
export default {
  name: 'vHeader',
  components: {
    BreadCrumb
  },
  data() {
    return {
      collapse: false
    }
  },
}
</script>

<style lang="less">
// @import '../../assets/css/common.less';
.flex-around {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.flex-betweeen {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.line-center {
  display: flex;
  align-items: center;
}

.header {
  &:extend(.flex-betweeen);
  height: 70px;
  background-color: @sideColor;
  .header-left {
    width: 200px;
    .logo-link {
      &:extend(.flex-center);
      height: 100%;
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
  }
  .header-right {

  }
}
</style>
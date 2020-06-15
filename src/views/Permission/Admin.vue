<template>
  <div class="admin-page">
    <el-card>
      <p class="card-icon">
        <i class="el-icon-s-opportunity"></i>
        本页面只在admin权限下展示
      </p>
      <p class="card-icon">您的权限页面有：</p>
      <el-tag v-for="(item, index) in roles" :key="index" type="success">{{ item }}</el-tag>
    </el-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "PageAdmin",
  computed: {
    ...mapGetters(["roles"])
  }
};
</script>

<style lang="less" scoped>
.admin-page {
  .el-tag {
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0 10px;
  }
}
</style>

<template>
  <div class="lang-page">
    <el-card shadow="hover" style="height:252px;">
      <div slot="header" class="clearfix">
        <span>最爱Food</span>
      </div>
      <p>红烧肉</p>
      <el-progress :percentage="71.3" color="#42b983"></el-progress>
      <p>鱼香肉丝</p>
      <el-progress :percentage="24.1" color="#f1e05a"></el-progress>
      <p>梅菜扣肉</p>
      <el-progress :percentage="13.7"></el-progress>
      <p>地三鲜</p>
      <el-progress :percentage="5.9" color="#f56c6c"></el-progress>
    </el-card>
  </div>
</template>

<style lang="less" scoped>
.lang-page {
  margin-top: 40px;
}
</style>

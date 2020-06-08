<template>
  <div class="tags-content">
    <ul class="tags-left">
      <li
        v-for="(item, index) in tagsList"
        :key="index"
      >
        <router-link :to="item.path" class="tag-item-title">{{ item.title }}</router-link>
        <div class="tag-item-close">
          <i class="el-icon-close"></i>
        </div>
      </li>
    </ul>
    <div class="tags-right">
      <el-dropdown size="small">
        <el-button size="mini" type="primary">
          标签选项
          <i class="el-icon-arrow-down el-icon--right"></i>
        </el-button>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tags',
  data() {
    return {
      tagsList: [
        {
          title: '首页',
          path: '/'
        },
        {
          title: '引导页',
          path: '/'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.tags-content {
  &:extend(.flex-between);

  .tags-left {
    li {
      
      .tag-item-title {

      }

      .tag-item-close {

      }
    }
  }

  .tags-right {

  }
}
.active {
  color: #fff;
  border: 1px solid #409EFF;
  background-color: #409EFF;
}
</style>
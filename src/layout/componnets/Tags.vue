<template>
  <div class="tags-content" v-if="tags.length > 0">
    <ul class="tags-left">
      <li
        v-for="(item, index) in tags"
        :key="index"
        :class="{ active: item.path === $route.fullPath }"
      >
        <router-link :to="item.path" class="tag-item-title">{{ item.title }}</router-link>
        <div class="tag-item-close" @click="closeTag(index)">
          <i class="el-icon-close"></i>
        </div>
      </li>
    </ul>
    <div class="tags-right">
      <el-dropdown size="small" @command="handleCommand">
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
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'tags',
  data() {
    return {
      tags: [
        
      ]
    }
  },
  computed: {
    ...mapGetters(['tagsList'])
  },
  watch: {
    $route: {
      handler(val) {
        this.setTags(val);
      },
      immediate: true
    }
  },
  methods: {
    ...mapActions({
      setTagsAsync: 'app/setTagsAsync'
    }),
    // 设置标签
    setTags(route) {
      let isRoute = this.tagsList.some(item => item.path === route.fullPath);
     
      if (!isRoute) {
        this.setTagsAsync({
          title: route.meta.title,
          path: route.fullPath,
          name: route.name
        });
        this.tags = this.tagsList;
      }
    },
    // 关闭当前标签
    closeTag(index) {
      let delItem = this.tags.splice(index, 1)[0];
      let curItem = this.tags[index] ? this.tags[index] : this.tags[index - 1];

      if (curItem) {
        delItem.path === this.$route.fullPath && this.$router.push(curItem.path);
        return;
      }

      this.$router.push('/');
    },
    // 标签选项下拉处理
    handleCommand(type) {
      type === 'all' ? this.closeAll() : this.closeOther();
    },
    // 关闭全部
    closeAll() {
      this.tags = [];
      this.setTagsAsync([]);
      this.$router.push('/');
    },
    // 关闭其它
    closeOther() {
      this.tags = this.tags.filter(item => item.path === this.$route.fullPath)
      this.setTagsAsync(this.tags);
    }
  }
}
</script>

<style lang="less" scoped>
.tags-content {
  &:extend(.flex-between);
  height: 34px;
  padding-right: 10px;
  background-color: var(--white-color);
  box-shadow: 0 5px 10px #DDD;

  .tags-left {
    &:extend(.flex-align-center);
    height: 100%;
    padding: 5px 5px;
    box-sizing: border-box;

    li {
      &:extend(.flex-align-center);
      height: 100%;
      margin-right: 5px;
      font-size: 12px;
      color: #666;
      padding: 0 5px 0 12px;
      border: 1px solid #E9EAEC;
      border-radius: 3px;
      transition: all 0.3s ease-in;
      cursor: pointer;

      .tag-item-close {
        margin-left: 10px;
      }

      &.active {
        color: var(--white-color);
        border: 1px solid #409EFF;
        background-color: #409EFF;
        
        .tag-item-title {
          color: var(--white-color);
        }
      }
    }
  }
}
</style>
<template>
  <div class="list-page">
    <el-card shadow="hover" style="height:403px;">
      <div slot="header" class="clearfix">
        <span>待办事项</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="addItem">添加</el-button>
      </div>
      <el-table :show-header="false" :data="curList" style="width:100%;">
        <el-table-column width="40">
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.status"></el-checkbox>
          </template>
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <div v-if="!scope.row.isEdit" class="todo-item" :class="{ 'todo-item-del': scope.row.status }">
              {{ scope.row.desc }}
            </div>
            <el-input v-else v-model="scope.row.desc"></el-input>
          </template>
        </el-table-column>
        <el-table-column width="160">
          <template slot-scope="scope">
            <i class="el-icon-edit icon-edit" @click="scope.row.isEdit = !scope.row.isEdit"></i>
            <i class="el-icon-check icon-edit" @click="saveEdit(scope.row, scope.$index)"></i>
            <i v-if="scope.row.isEdit" class="el-icon-delete icon-edit"></i>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          @current-change="handleCurrentChange"
          :page-size="5"
          layout="total, prev, pager, next"
          :total="todoList.length"
        />
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: [
        {
          status: false,
          isEdit: false,
          desc: "今天完成上线"
        },
        {
          status: false,
          isEdit: false,
          desc: "这周找到女朋友"
        },
        {
          status: false,
          isEdit: false,
          desc: "今天修复100个bug"
        },
        {
          status: false,
          isEdit: false,
          desc: "我要杀死bier"
        },
        {
          status: false,
          isEdit: false,
          desc: "看一场轰轰烈烈的小电影"
        }
      ],
      curList: []
    };
  },
  mounted() {
    this.handleCurrentChange();
  },
  methods: {
    handleCurrentChange(p = 1) {
      this.curList = this.todoList.slice((p - 1) * 5, p * 5);
    },
    saveEdit(row, index) {
      if (!row.desc) {
        this.$message.error("待办事项不能为空");
        return;
      }

      row.isEdit = !row.isEdit;
    },
    addItem() {
      this.todoList.unshift({
        status: false,
        isEdit: true,
        desc: ""
      });
      this.curList.unshift({
        status: false,
        isEdit: true,
        desc: ""
      });
      this.curList.length > 5 && this.curList.pop();
    }
  }
};
</script>

<style lang="less" scoped>
.list-page {
  .todo-item {
    font-size: 14px;

    &.todo-item-del {
      text-decoration: line-through;
      color: var(--grey-color);
    }
  }

  .icon-edit {
    margin-right: 30px;
  }

  .pagination {
    text-align: center;
    margin-top: 20px;
  }
}
</style>

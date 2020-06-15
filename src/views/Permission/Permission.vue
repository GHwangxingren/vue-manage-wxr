<template>
  <div class="roles-page">
    <el-card>
      <el-button type="primary" @click="addRole">添加权限</el-button>
      <el-table class="table-top" :data="userList" stripe border style="width: 100%;">
        <el-table-column prop="name" label="姓名" align="center" width="150px"></el-table-column>
        <el-table-column prop="role" label="身份" align="center" width="150px"></el-table-column>
        <el-table-column prop="desc" label="说明" align="center"></el-table-column>
        <el-table-column label="操作" align="center" width="300px">
          <template slot-scope="scope">
            <el-button type="primary" @click="editRole(scope.row, scope.$index)">编辑</el-button>
            <el-button type="warning" @click="deleteRole(scope.$index)" :disabled="scope.row.role === 'admin'"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-dialog title="权限编辑" :visible.sync="dialogShow" class="diaForm">
      <el-form ref="rolesForm" :model="formData" :rules="rules" label-width="140px">
        <el-form-item label="身份" prop="key">
          <el-input type="text" placeholder="请输入要添加的身份类别" v-model="formData.key"></el-input>
        </el-form-item>
        <el-form-item label="说明" prop="description">
          <el-input type="text" placeholder="请输入相关说明" v-model="formData.description"></el-input>
        </el-form-item>
        <el-form-item label="菜单">
          <el-tree
            :data="treeData"
            ref="tree"
            node-key="name"
            :props="defaultProps"
            show-checkbox
            :check-strictly="false"
          ></el-tree>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="changeRole('rolesForm', editType)">确认</el-button>
          <el-button @click="dialogShow = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { getRolesListApi } from "@/api";
import { routes, asyncRoutes } from "@/router";

export default {
  name: "SetRole",
  data() {
    return {
      routesList: [...routes, ...asyncRoutes],
      userList: [],
      dialogShow: false,
      rules: [],
      formData: [],
      treeData: [],
      defaultProps: {
        label: "label",
        children: "children"
      }
    };
  },
  created() {
    this.getRolesList();
    this.handleTreeData(this.routesList);
  },
  methods: {
    async getRolesList() {
      let res = await getRolesListApi();

      res.code === 0 && (this.userList = res.data.list);
    },
    addRole() {
      this.dialogShow = true;
    },
    editRole(row, index) {
      console.log(row, index);
    },
    deleteRole(index) {
      console.log(index);
    },
    changeRole(param, type) {
      console.log(param, type);
    },
    handleTreeData(val) {
      console.log(val);
    }
  }
};
</script>

<style lang="less">
.roles-page {
  .table-top {
    margin-top: 10px;
    .el-button {
      padding: 8px 18px;
      font-size: 12px;
    }
  }

  .diaForm {
    .el-input {
      width: 350px;
    }

    .el-form-item__label {
      padding-right: 12px;
    }
  }
}
</style>

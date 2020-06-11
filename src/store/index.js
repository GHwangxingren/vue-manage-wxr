import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
const path = require("path");

Vue.use(Vuex);

// 调用require.context导入某个文件夹的所有匹配文件,返回执行上下文的环境赋值给files变量
const files = require.context("./modules", false, /\.js$/);
let modules = {};
// 调用files函数的keys方法返回modules文件夹下所有以.js结尾的文件的文件名,返回文件名组成的数组
files.keys().map(key => {
  // basename第一个参数是要处理的内容，返回其最后一部分，尾部的目录分隔符会被忽略.第二参数要过滤的字符
  let _cur = path.basename(key, ".js");
  // 读取文件中的default模块
  modules[_cur] = files(key).default || files(key);
});

const store = new Vuex.Store({
  modules,
  getters
});
export default store;


const state = {
  collapse: false, // sidebar的展开与收起
  tagsList: [] // 打开页面标签
}
const mutations = {
  // 控制侧边栏的展开与收起
  changeCollapse(state) {
    state.collapse = !state.collapse
  },
  // 页面标签
  setTag(state, preload) {
    if (preload instanceof Array) {
      state.tagsList = preload;
      return;
    }

    state.tagsList.length > 6 && state.tagsList.shift();
    state.tagsList.push();
  }
}
const actions = {
  setTagsAsync({ commit }, payload) {
    commit('setTag', payload);
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

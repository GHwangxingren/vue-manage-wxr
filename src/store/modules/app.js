
const state = {
  collapse: false, // sidebar的展开与收起
}
const mutations = {
  changeCollapse(state) {
    state.collapse = !state.collapse
  }
}
const actions = {
  
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

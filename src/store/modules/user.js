import { loginApi} from '@/api/index';
// import { Message } from 'element-ui'
import router from '@/router';
import formatDate from '@/utils/formatDate';

const state = {
  token: localStorage.getItem('MS_TOKEN') || '', // 认证凭证'
  userName: '',
  roles: [],
  introduce: '',
  loginTime: localStorage.getItem('MS_LOGINTIME') || ''
}
const mutations = {
  SET_TOKEN(state, val) {
    state.token = val
    localStorage.setItem('MS_TOKEN', val)
  },
  DEL_TOKEN(state) {
    state.token = ''
    state.userName = ''
    state.roles = ''
    state.introduce = ''
    localStorage.removeItem('MS_TOKEN')
  },
  SET_ROLES(state, payload) {
    state.roles = payload
  },
  SET_NAME(state, payload) {
    state.userName = payload
  },
  SET_INTRODUCE(state, payload) {
    state.introduce = payload
  },
  SET_LOGINTIME(state, payload) {
    state.loginTime = payload
    localStorage.setItem('MS_LOGINTIME', formatDate('', 'YYYY-MM-DD'))
  }
}
const actions = {
  // user login
  _login({ commit }, payload) {
    return new Promise((resolve, reject) => {
      loginApi(payload)
        .then(res => {
          if (res.code === 0) {
            const {success, msg, userInfo} = res.data;
            if (success) {
              this.$message.success(msg)
              commit('SET_TOKEN', userInfo.token);
              commit('SET_ROLES', userInfo.roles);
              commit('SET_NAME', userInfo.name);
              commit('SET_LOGINTIME', formatDate('', 'YYYY-MM-DD'));
              console.log(2222222)
              this.$router.push('/');
            } else {
              this.$message.error(msg)
            }
            resolve(res)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  },
  loginOut({ commit }) {
    commit('DEL_TOKEN')
    // resetRouter()
    router.push({
      path: '/login',
      query: {
        redirect: '/'
      }
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}

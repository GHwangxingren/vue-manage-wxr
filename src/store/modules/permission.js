import { asyncRoutes, routes } from "@/router";

const state = {
  routes: [],
  addRoutes: []
};

const mutations = {
  SET_ROUTES(state, payload) {
    state.routes = [...routes, ...payload];
    state.addRoutes = payload;
  }
};

let matchRoles = (routes, roles) => {
  let _aRoute = [];
  for (let key of routes) {
    let _oKey = { ...key };
    if (roles.includes(_oKey.name)) {
      if (_oKey.children) {
        _oKey.children = matchRoles(_oKey.children, roles);
      }
      _aRoute.push(_oKey);
    }
  }
  return _aRoute;
};

const actions = {
  getAsyncRoutes({ commit, rootGetters }, roles) {
    return new Promise(resolve => {
      let routes = rootGetters.role === "admin" ? asyncRoutes : matchRoles(asyncRoutes, roles);
      commit("SET_ROUTES", routes);
      resolve(routes);
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};

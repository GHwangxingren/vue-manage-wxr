const getters = {
  token: state => state.user.token,
  userName: state => state.user.userName,
  roles: state => state.user.roles,
  routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes,
}
export default getters

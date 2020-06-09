const getters = {
  token: state => state.user.token,
  userName: state => state.user.userName,
  roles: state => state.user.roles,
  routes: state => state.permission.routes,
  addRoutes: state => state.permission.addRoutes,
  collapse: state => state.app.collapse,
  tagsList: state => state.app.tagsList,
  tagsName: state => {
    let nameArr = state.app.tagsList.length && state.app.tagsList.map(item => {
      return item.name
    });

    return nameArr || [];
  }
};

export default getters;

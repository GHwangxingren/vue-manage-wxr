import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import "./assets/css/common.less";
import "./assets/icon/iconfont.css";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueParticles from "vue-particles";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import VueScrollactive from "vue-scrollactive";

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueParticles);
Vue.use(mavonEditor);
Vue.use(VueScrollactive);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

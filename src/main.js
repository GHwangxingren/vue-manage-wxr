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

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(VueParticles);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

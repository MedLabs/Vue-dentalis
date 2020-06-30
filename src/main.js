import Vue from "vue";
import App from "./App.vue";
import router from "./routes";
import antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import viserVue from "viser-vue";

Vue.config.productionTip = false;

Vue.use(viserVue);
Vue.use(antd);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");

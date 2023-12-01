import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

console.log("Read the following environment variables", process.env);

if (!process.env.VUE_APP_SOCKET_ADDRESS) {
  throw new Error("VUE_APP_SOCKET_ADDRESS env variable is not set");
}


new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");

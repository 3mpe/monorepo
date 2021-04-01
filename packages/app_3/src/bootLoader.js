import Vue, { defineAsyncComponent } from "vue";
import App from "./App.vue";
import router from "./router";

new Vue({
    router,
    // components: { Header },
    render: (h) => h(App),
  }).$mount("#app");
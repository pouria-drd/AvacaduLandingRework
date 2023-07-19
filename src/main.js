import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.config.globalProperties.$baseURL = "https://api.avacadu.ir/";

app.use(router);

app.mount("#app");

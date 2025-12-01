// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./styles.scss";
import "@simonwep/pickr/dist/themes/classic.min.css";

createApp(App).use(router).mount("#app");

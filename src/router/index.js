// router/index.js
import TinyColorPage from "../pages/TinyColorPage.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import PickrPage from "../pages/PickrPage.vue";
import VueColorPage from "../pages/VueColorPage.vue";
import IroPage from "../pages/IroPage.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/pickr", component: PickrPage },
  { path: "/vue-color", component: VueColorPage },
  { path: "/tinycolor", component: TinyColorPage },
  { path: "/iro", component: IroPage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});

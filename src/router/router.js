import {createRouter, createWebHistory} from "vue-router";

import HmLoginPage from "../components/pages/account/hm-login-page.vue";
import HmRegisterPage from "../components/pages/account/hm-register-page.vue";

import HmHomePage from "../components/pages/home/hm-home-page.vue";

import HmMyPage from "../components/pages/my-page/hm-my-page.vue";

import HmSettingPage from "../components/pages/my-page/hm-setting-page.vue";

const routes = [
  {path: "/", name: "main", component: HmHomePage},
  {path: "/login", name: "login", component: HmLoginPage},
  {path: "/register", name: "register", component: HmRegisterPage},
  {path: "/home", name: "home", component: HmHomePage},
  {path: "/my-page", name: "my-page", component: HmMyPage},
  {path: "/setting", name: "setting", component: HmSettingPage},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

import {createRouter, createWebHistory} from "vue-router";

import HmLoginPage from "../components/pages/account/hm-login-page.vue";
import HmRegisterPage from "../components/pages/account/hm-register-page.vue";
const routes = [
  {path: "/", name: "root", component: HmRegisterPage},
  {path: "/login", name: "login", component: HmLoginPage},
  {path: "/register", name: "register", component: HmRegisterPage},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

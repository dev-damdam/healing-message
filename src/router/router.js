import {createRouter, createWebHistory} from "vue-router";

import HmLoginPage from "../components/pages/account/hm-login-page.vue";
import HmRegisterPage from "../components/pages/account/hm-register-page.vue";

import HmHomePage from "../components/pages/home/hm-home-page.vue";

import HmMyPage from "../components/pages/my-page/hm-my-page.vue";
import HmEditUserPage from "../components/pages/my-page/hm-edit-user-page.vue";
import HmSettingPage from "../components/pages/setting/hm-setting-page.vue";
import HmNoticePage from "../components/pages/setting/hm-notice-page.vue";
import HmServiceCenterPage from "../components/pages/setting/hm-service-center-page.vue";
import HmPrivacyPage from "../components/pages/setting/hm-privacy-page.vue";

const routes = [
  {path: "/", name: "main", component: HmHomePage},
  {path: "/login", name: "login", component: HmLoginPage},
  {path: "/register", name: "register", component: HmRegisterPage},
  {path: "/home", name: "home", component: HmHomePage},
  {path: "/my-page", name: "my-page", component: HmMyPage},
  {path: "/edit-user", name: "edit-user", component: HmEditUserPage},
  {path: "/setting", name: "setting", component: HmSettingPage},
  {path: "/notice", name: "notice", component: HmNoticePage},
  {path: "/service-center", name: "service-center", component: HmServiceCenterPage},
  {path: "/privacy", name: "privacy", component: HmPrivacyPage},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

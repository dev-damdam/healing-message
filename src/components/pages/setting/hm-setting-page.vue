<template>
  <div class="hm-setting-page-wrapper">
    <hm-layout>
      <template v-slot:header>
        <hm-header back line l-icon="chevron-left" title="설정" @back="back" />
      </template>
      <hm-listview v-for="(setting, index) in settings" :key="index" line @click.capture="clickList(setting.key)">
        <hm-label class="title">{{ setting.title }}</hm-label>
      </hm-listview>
      <div class="footer">
        <hm-button type="button" @click="register" class="logout-btn">로그아웃</hm-button>
        <span class="version">v1.0.0</span>
      </div>
    </hm-layout>
  </div>
</template>
<script>
import hmLayout from "../../layouts/hm-layout.vue";
import hmHeader from "../../layouts/hm-header.vue";
import hmButton from "../../elements/hm-button.vue";
import hmLabel from "../../elements/hm-label.vue";
import HmListview from "../../layouts/hm-listview.vue";

export default {
  name: "HmSettingPage",
  components: {
    hmLayout,
    hmHeader,
    hmButton,
    HmListview,
    hmLabel,
  },
  created() {
    //test
    this.settings.push({key: "notice", title: "공지사항"});
    this.settings.push({key: "notification", title: "알림설정"});
    this.settings.push({key: "service-center", title: "고객센터"});
    this.settings.push({key: "privacy", title: "개인정보처리방침"});
  },
  data() {
    return {
      settings: [],
    };
  },
  methods: {
    back() {
      this.$router.back();
    },

    clickList(key) {
      if (key == "notice") {
        this.$router.push("/notice");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.hm-setting-page-wrapper {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  .footer {
    width: 100%;
    box-sizing: border-box;
    padding: px(20);
    position: absolute;
    bottom: 0;

    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
}
</style>

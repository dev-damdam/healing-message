<template>
  <div class="hm-setting-page-wrapper">
    <hm-layout>
      <template v-slot:header>
        <hm-header back line l-icon="chevron-left" title="개인정보처리방침" @back="back" />
      </template>
      <div v-for="(privacy, index) in privacies" :key="index">
        <hm-listview line @click.capture="clickPrivacy(index)">
          <hm-contents align="vertical">
            <hm-label class="title">{{ privacy.title }}</hm-label>
          </hm-contents>

          <hm-icon :icon="!privacy.isShow ? 'chevron-down' : 'chevron-up'" size="xs" />
        </hm-listview>
        <hm-contents class="notice-contents" v-if="privacy.isShow">{{ privacy.contents }}</hm-contents>
      </div>
    </hm-layout>
  </div>
</template>
<script>
import hmLayout from "../../layouts/hm-layout.vue";
import hmHeader from "../../layouts/hm-header.vue";
import hmLabel from "../../elements/hm-label.vue";
import hmIcon from "../../elements/hm-icon.vue";
import hmContents from "../../elements/hm-contents.vue";
import HmListview from "../../layouts/hm-listview.vue";

export default {
  name: "HmNoticePage",
  components: {
    hmLayout,
    hmHeader,
    HmListview,
    hmLabel,
    hmIcon,
    hmContents,
  },
  created() {
    //test
    this.privacies.push({
      title: "개인정보처리방치",
      isShow: false,
      contents: "tttttttt",
    });
    this.privacies.push({
      title: "이용약관",
      isShow: false,
      contents: "tttttttt",
    });
  },
  data() {
    return {
      privacies: [],
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    clickPrivacy(idx) {
      if (this.privacies[idx].isShow) this.privacies[idx].isShow = false;
      else this.privacies[idx].isShow = true;
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
}

.notice-contents {
  width: 100%;
  box-sizing: border-box;
  padding: px(10);
  border-bottom: px(1) solid $hm-gray;
}
</style>

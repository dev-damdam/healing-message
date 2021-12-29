<template>
  <div class="hm-setting-page-wrapper">
    <hm-layout>
      <template v-slot:header>
        <hm-header back line l-icon="chevron-left" title="공지사항" @back="back" />
      </template>
      <div v-for="(notice, index) in notices" :key="index">
        <hm-listview line @click.capture="clickNotice(index)">
          <hm-contents align="vertical">
            <hm-label class="sub-title">{{ notice.day }}</hm-label>
            <hm-label class="title">{{ notice.title }}</hm-label>
          </hm-contents>

          <hm-icon :icon="!notice.isShow ? 'chevron-down' : 'chevron-up'" size="xs" />
        </hm-listview>
        <hm-contents class="notice-contents" v-if="notice.isShow">{{ notice.contents }}</hm-contents>
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
    for (let i = 0; i < 5; i++) {
      this.notices.push({
        day: "2021.09.03",
        title: "버그 수정",
        isShow: false,
        contents: "tttttttt",
      });
    }
  },
  data() {
    return {
      notices: [],
    };
  },
  methods: {
    back() {
      this.$router.back();
    },
    clickNotice(idx) {
      if (this.notices[idx].isShow) this.notices[idx].isShow = false;
      else this.notices[idx].isShow = true;
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

<template>
  <div class="hm-setting-page-wrapper">
    <hm-layout>
      <template v-slot:header>
        <hm-header back line l-icon="chevron-left" title="고객센터" @back="back" />
      </template>
      <div v-for="(service, index) in services" :key="index">
        <hm-listview line @click.capture="clickNotice(index)">
          <hm-contents align="vertical">
            <hm-label class="title">{{ service.title }}</hm-label>
          </hm-contents>
        </hm-listview>
      </div>
    </hm-layout>
  </div>
</template>
<script>
import hmLayout from "../../layouts/hm-layout.vue";
import hmHeader from "../../layouts/hm-header.vue";
import hmLabel from "../../elements/hm-label.vue";
import hmContents from "../../elements/hm-contents.vue";
import HmListview from "../../layouts/hm-listview.vue";

export default {
  name: "HmNoticePage",
  components: {
    hmLayout,
    hmHeader,
    HmListview,
    hmLabel,
    hmContents,
  },
  created() {
    //test
    this.services.push({title: "자주하는 질문"});
    this.services.push({title: "문의하기"});
  },
  data() {
    return {
      services: [],
    };
  },
  methods: {
    back() {
      this.$router.back();
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

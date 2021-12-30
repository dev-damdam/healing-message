<template>
  <div class="hm-write-diary-page-wrapper">
    <hm-layout>
      <template v-slot:header>
        <hm-header back @back="back" l-icon="chevron-left">
          <template v-slot:right>
            <hm-button @click="writeDiary">작성하기</hm-button>
          </template>
        </hm-header>
      </template>
      <div class="diary-form-wrapper">
        <div class="form-header">
          <div class="profile-image">
            <hm-icon
              src="https://png.pngtree.com/png-vector/20190216/ourlarge/pngtree-cute-baby-dog-face-vector-png-image_550082.jpg"
              size="m"
            />
          </div>
          <hm-contents align="vertical">
            <hm-label class="title">익명의 뽀로로</hm-label>
            <hm-label class="sub-title">2021.08.30</hm-label>
          </hm-contents>
        </div>
        <div class="input-form" contenteditable="true"></div>
        <div class="image-list">
          <div class="image" v-for="(image, index) in images" :key="index"></div>
        </div>
      </div>
    </hm-layout>
  </div>
</template>
<script>
import HmHeader from "../../layouts/hm-header.vue";
import hmLayout from "../../layouts/hm-layout.vue";
import hmButton from "../../elements/hm-button.vue";
import hmContents from "../../elements/hm-contents.vue";
import hmLabel from "../../elements/hm-label.vue";
import HmIcon from "../../elements/hm-icon.vue";

export default {
  components: {hmLayout, HmHeader, hmButton, hmContents, hmLabel, HmIcon},
  name: "hm-write-diary-page",
  data() {
    return {
      images: [],
    };
  },
  created() {
    for (let i = 0; i < 3; i++) {
      this.images.push({
        index: i,
        src: "none",
      });
    }
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>
<style lang="scss" scoped>
.hm-write-diary-page-wrapper {
  width: 100%;
  height: 100%;
}

.diary-form-wrapper {
  box-sizing: border-box;
  padding: px(20);
}

.form-header {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding-bottom: px(20);
  .profile-image {
    padding-right: px(6);
  }
}

.input-form {
  width: 100%;
  height: px(250);
  border: px(1) solid $hm-default;

  box-sizing: border-box;
  padding: px(8);

  overflow: overlay;

  font: normal normal normal 15rem/18rem $hm-font;
}

.image-list {
  width: 100%;

  overflow: overlay;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(3, px(100));
  row-gap: px(20);
  column-gap: px(20);

  padding-top: px(20);
  .image {
    background-color: $hm-gray94;
    width: px(100);
    height: px(100);
  }
}
</style>

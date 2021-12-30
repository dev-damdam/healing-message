<template>
  <div class="hm-my-page-wrapper">
    <hm-layout>
      <template v-slot:header>
        <hm-header l-icon="chevron-left" r-icon="cog" back @back="back" @right-click="moveSettingPage" />
      </template>
      <div class="profile-wrapper">
        <div class="profile">
          <hm-button size="s" class="edit" @click="editUserInfo">edit</hm-button>
        </div>
        <div class="info">
          <span class="name">뿡뿡뿡</span>
          <span class="emotions">감정 (슬픔)</span>
        </div>
      </div>
      <div class="message-list-wrapper">
        <hm-card class="message" v-for="(message, index) in messageList" :key="index" line menu>
          <template v-slot:header>
            <hm-icon class="p-image" :src="message.profile" size="s" />
            <hm-label class="sub-title">익명의 뽀로로</hm-label>
          </template>
          <div>
            {{ message.contents }}
          </div>
        </hm-card>
      </div>
      <div class="floating-button" @click="moveDiaryPage">
        <hm-icon icon="pencil-alt" size="xs" />
      </div>
    </hm-layout>
  </div>
</template>
<script>
import HmButton from "../../elements/hm-button.vue";
import hmLayout from "../../layouts/hm-layout.vue";
import hmHeader from "../../layouts/hm-header.vue";
import hmCard from "../../layouts/hm-card.vue";
import HmIcon from "../../elements/hm-icon.vue";
import HmLabel from "../../elements/hm-label.vue";

export default {
  name: "hm-my-page",
  components: {
    hmLayout,
    hmHeader,
    HmButton,
    hmCard,
    HmIcon,
    HmLabel,
  },

  data() {
    return {
      //test data
      messageList: [],
    };
  },

  created() {
    //test data
    for (let i = 0; i < 10; i++) {
      this.messageList.push({
        profile:
          "https://png.pngtree.com/png-vector/20190216/ourlarge/pngtree-cute-baby-dog-face-vector-png-image_550082.jpg",
        name: "뿡뿡이",
        contents: "내용입니다.",
      });
    }
  },

  methods: {
    back() {
      this.$router.back();
    },

    moveSettingPage() {
      this.$router.push("/setting");
    },

    editUserInfo() {
      this.$router.push("/edit-user");
    },

    moveDiaryPage() {
      this.$router.push("/write-diary");
    },
  },
};
</script>
<style lang="scss" scoped>
.hm-my-page-wrapper {
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  font-size: 16rem;

  .profile-wrapper {
    position: relative;
    left: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: px(240);

    background: linear-gradient(to bottom, palegoldenrod 50%, white 50%);

    .profile {
      position: relative;
      left: 0;
      right: 0;
      background-color: aqua;
      width: px(100);
      height: px(100);
      border-radius: 50%;

      .edit {
        position: absolute;
        bottom: -5%;
        right: -10%;
      }
    }

    .info {
      position: absolute;
      top: 80%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .name {
    font: normal normal bold 16rem/18rem $hm-font;
    margin-bottom: px(3);
  }

  .emotions {
    font: normal normal normal 14rem/16rem $hm-font;
  }

  .message-list-wrapper {
    overflow: overlay;
    width: 100%;
    height: calc(100% - #{px(240)});
    padding-top: px(40);
    box-sizing: border-box;
  }

  .message {
    margin: 0 auto;
    width: px(360);
    height: auto;

    margin-bottom: px(20);

    .p-image {
      margin-right: px(6);
    }
  }

  .floating-button {
    position: absolute;
    right: px(10);
    bottom: px(10);

    width: px(50);
    height: px(50);

    background-color: $hm-orange;

    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>

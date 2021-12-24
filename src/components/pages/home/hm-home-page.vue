<template>
  <div class="hm-home-page-wrapper">
    <hm-layout>
      <template v-slot:header>
        <hm-header l-icon="bell">
          <template v-slot:right>
            <div
              class="profile"
              src="https://png.pngtree.com/png-vector/20190216/ourlarge/pngtree-cute-baby-dog-face-vector-png-image_550082.jpg"
              @click="moveMyPage"
            />
          </template>
        </hm-header>
      </template>

      <div class="banner">banner</div>
      <div class="user-list-wrapper">
        <hm-listview v-for="(user, index) in users" :key="index" line>
          <hm-icon :src="user.icon.src"></hm-icon>
          <hm-contents align="vertical">
            <hm-label class="title">{{ user.nickname }}</hm-label>
            <hm-label class="sub-title">{{ user.emotions }}</hm-label>
          </hm-contents>
          <hm-button>보내기</hm-button>
        </hm-listview>
      </div>
    </hm-layout>
  </div>
</template>
<script>
import hmLayout from "../../layouts/hm-layout.vue";
import hmHeader from "../../layouts/hm-header.vue";
import HmListview from "../../layouts/hm-listview.vue";
import HmIcon from "../../elements/hm-icon.vue";
import HmContents from "../../elements/hm-contents.vue";
import HmLabel from "../../elements/hm-label.vue";
import HmButton from "../../elements/hm-button.vue";

export default {
  name: "hm-home-page",
  components: {
    hmLayout,
    hmHeader,
    HmListview,
    HmButton,
    HmContents,
    HmIcon,
    HmLabel,
  },
  data() {
    return {
      //test data
      users: [],
    };
  },

  created() {
    //test data
    for (let i = 0; i < 30; i++) {
      this.users.push({
        nickname: "방귀대장뿡뿡이",
        emotions: "별로임,,,",
        icon: {
          src: "https://png.pngtree.com/png-vector/20190216/ourlarge/pngtree-cute-baby-dog-face-vector-png-image_550082.jpg",
        },
      });
    }
  },

  methods: {
    moveMyPage() {
      this.$router.push("/my-page");
    },
  },
};
</script>
<style lang="scss" scoped>
.hm-home-page-wrapper {
  width: 100%;
  height: 100%;

  header svg {
    width: px(30);
    height: px(30);
  }

  .profile {
    width: px(34);
    height: px(34);
    border-radius: 50%;
    background-color: $hm-gray;
  }

  .banner {
    width: 100%;
    height: px(240);

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: $hm-default;

    font-size: 15rem;
  }

  .user-list-wrapper {
    width: 100%;
    height: calc(100% - #{px(240)});
    overflow: overlay;
  }
}
</style>

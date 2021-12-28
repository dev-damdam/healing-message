<template>
  <div class="hm-setting-page-wrapper">
    <hm-layout>
      <template v-slot:header>
        <hm-header back line l-icon="chevron-left" title="프로필 수정" @back="back" />
      </template>
      <div class="edit-form-wrapper">
        <hm-input v-model="inputs.nickname" type="text" placeholder="익명의 뽀로로" :label="validateMessage.nickname" />
        <hm-input v-model="inputs.password" type="password" placeholder="비밀번호" :label="validateMessage.password" />
        <hm-input
          v-model="inputs.passwordConfirm"
          type="password"
          placeholder="비밀번호 확인"
          :label="validateMessage.passwordConfirm"
        />
      </div>
      <hm-button type="button" @click="register" class="edit-profile-btn">프로필 수정하기</hm-button>
    </hm-layout>
  </div>
</template>
<script>
import hmLayout from "../../layouts/hm-layout.vue";
import hmHeader from "../../layouts/hm-header.vue";
import hmInput from "../../elements/hm-input.vue";
import hmButton from "../../elements/hm-button.vue";

export default {
  name: "HmEditUserPage",
  components: {
    hmLayout,
    hmHeader,
    hmInput,
    hmButton,
  },
  data() {
    return {
      inputs: {
        nickname: "",
        password: "",
        passwordConfirm: "",
      },
      validateMessage: {
        nickname: "",
        password: "",
        passwordConfirm: "",
      },
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

  .edit-form-wrapper,
  .edit-profile-btn {
    margin: px(24) auto;
    width: px(340);
  }

  .edit-profile-btn {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 10%;
  }
}
</style>

<template>
  <div class="hm-login-wrapper">
    <div class="login-form">
      <div class="email-wrapper">
        <hm-input
          v-model="inputs.email"
          type="text"
          placeholder="이메일"
          class="input"
          :label="validateMessage.email"
        />
      </div>
      <hm-input v-model="inputs.password" type="password" placeholder="비밀번호" :label="validateMessage.password" />

      <hm-button type="button" @click="login" class="register-btn">로그인</hm-button>

      <div class="msg-wrapper">
        <span>아직 회원이 아니신가요?</span>
        <span class="login" @click="moveRegisterPage">회원가입</span>
      </div>
      <div class="msg-wrapper">
        <span>이메일 / 비밀번호 찾기</span>
      </div>
    </div>
  </div>
</template>

<script>
import hmInput from "../../elements/hm-input.vue";
import hmButton from "../../elements/hm-button.vue";
export default {
  name: "hm-login-page",
  components: {
    hmInput,
    hmButton,
  },

  data() {
    return {
      inputs: {
        email: "",
        password: "",
      },
      validateMessage: {
        email: "",
      },
    };
  },

  methods: {
    login() {
      this.$router.replace("/home");
    },
    moveRegisterPage() {
      this.$router.push("/register");
    },
  },
};
</script>

<style lang="scss" scoped>
.hm-login-wrapper {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.login-form {
  width: px(240);
  height: px(240);
}

.msg-wrapper {
  box-sizing: border-box;
  padding: px(4) px(0);
  text-align: center;
  font: normal normal normal 14rem/17rem $hm-font;

  .login {
    padding-left: px(2);
    font-weight: bold;

    color: $hm-default;
  }
}
</style>

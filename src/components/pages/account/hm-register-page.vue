<template>
  <div class="hm-register-wrapper">
    <div class="register-form">
      <div class="email-wrapper">
        <hm-input
          v-model="inputs.email"
          type="text"
          placeholder="이메일"
          class="input"
          :label="validateMessage.email"
        />
        <hm-button type="button" @click="chkEmailDuplicate" class="button">중복확인</hm-button>
      </div>
      <hm-input v-model="inputs.password" type="password" placeholder="비밀번호" :label="validateMessage.password" />
      <hm-input
        v-model="inputs.passwordConfirm"
        type="password"
        placeholder="비밀번호 확인"
        :label="validateMessage.passwordConfirm"
      />
      <hm-input v-model="inputs.nickname" type="text" placeholder="별명" :label="validateMessage.nickname" />
      <hm-checkbox v-model="inputs.agree" id="agree" value="개인정보 동의">개인정보 동의</hm-checkbox>

      <hm-button type="button" @click="register" class="register-btn">회원가입</hm-button>

      <div class="msg-wrapper">
        <span>회원이신가요?</span>
        <span class="login" @click="moveLoginPage">로그인</span>
      </div>
    </div>
  </div>
</template>
<script>
import hmInput from "../../elements/hm-input.vue";
import hmButton from "../../elements/hm-button.vue";
import hmCheckbox from "../../elements/hm-checkbox.vue";

export default {
  components: {hmInput, hmButton, hmCheckbox},
  name: "hm-register-page",
  data() {
    return {
      inputs: {
        email: "",
        password: "",
        passwordConfirm: "",
        nickname: "",
        agree: false,
      },
      validateMessage: {
        email: "",
        password: "",
        passwordConfirm: "",
        nickname: "",
      },
    };
  },
  methods: {
    chkEmailDuplicate() {
      console.log("click");
    },
    register() {
      this.$router.replace("/login");
    },
    moveLoginPage() {
      this.$router.push("/login");
    },
  },
};
</script>

<style lang="scss" scoped>
.hm-register-wrapper {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.register-form {
  width: px(240);
  height: px(240);
}

.email-wrapper {
  display: flex;
  width: 100%;
  flex-shrink: 0;
  justify-content: space-between;

  .input {
    width: 80%;
    height: 100%;
  }

  .button {
    width: 20%;
    height: 100%;
  }
}

.register-btn {
  margin: px(6) px(0);
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

<template>
  <div class="hm-input">
    <input
      :type="type"
      :id="id"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      @input="inputEventListener"
      @focusout.stop="focusoutEventListener"
    />
    <span class="validate-label">{{ label }}</span>
  </div>
</template>
<script>
export default {
  name: "hm-input",
  props: {
    modelValue: {
      default: "",
      type: String,
    },
    type: {
      default: "text",
      type: String,
    },
    id: {
      default: "",
      type: String,
    },
    name: {
      default: "",
      type: String,
    },
    placeholder: {
      default: "",
      type: String,
    },
    label: {
      default: "",
      type: String,
    },
  },
  data() {
    return {};
  },
  methods: {
    inputEventListener(e) {
      this.$emit("update:modelValue", e.target.value);
    },
    focusoutEventListener(e) {
      this.$emit("focusout", e);
    },
  },
};
</script>
<style lang="scss" scoped>
.hm-input {
  input {
    width: 100%;
    padding: px(5) px(5);
    box-sizing: border-box;
    border-radius: px(15);
    border: px(1) solid $hm-default;
    font: normal normal bold 14rem/17rem $hm-font;

    &::placeholder {
      color: #999999;
    }
  }
}

.validate-label {
  width: 100%;
  min-height: 11rem;
  display: inline-block;
  box-sizing: border-box;
  margin: px(4) px(4);
  font: normal normal bold 11rem/14rem $hm-font;
}
</style>

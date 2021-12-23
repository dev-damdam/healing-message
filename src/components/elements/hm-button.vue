<template>
  <div class="hm-button">
    <button :type="type" :id="id" :name="name" @click.stop="click">
      <slot />
    </button>
  </div>
</template>
<script>
export default {
  name: "hm-button",
  props: {
    type: {
      default: "button",
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
  },
  methods: {
    click(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="scss" scoped>
.hm-button {
  button {
    width: 100%;
    padding: px(5) px(5);
    box-sizing: border-box;
    border-radius: px(15);
    border: px(1) solid $hm-default;
    background-color: $hm-default;
    font: normal normal bold 14rem/17rem $hm-font;
    color: white;

    &:hover {
      background-color: $hm-green-dark70;
    }
  }
}
</style>

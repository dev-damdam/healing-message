<template>
  <div class="hm-button">
    <button :class="[size]" :type="type" :id="id" :name="name" @click.stop="click">
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
    size: {
      default: "m",
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
    color: white;

    &:hover {
      background-color: $hm-green-dark70;
    }
  }

  .m {
    min-width: px(100);
    min-height: px(35);
    font: normal normal bold 14rem/17rem $hm-font;
  }

  .s {
    min-width: px(50);
    min-height: px(30);
    font: normal normal bold 12rem/14rem $hm-font;
  }
}
</style>

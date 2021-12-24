<template>
  <div class="hm-icon-wrapper">
    <div class="icon" :class="[size, shape]" :style="{'background-image': 'url(' + src + ')'}"></div>
  </div>
</template>
<script>
export default {
  name: "hm-icon",
  props: {
    icon: {
      required: true,
    },
    src: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "m",
    },
    shape: {
      type: String,
      default: "circle",
    },
  },
};
</script>
<style lang="scss" scoped>
.hm-icon-wrapper {
  .icon {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .s {
    width: px(20);
    height: px(20);
  }
  .m {
    width: px(50);
    height: px(50);
  }
  .l {
    width: px(80);
    height: px(80);
  }

  .circle {
    border-radius: 50%;
  }

  .rect {
    border-radius: 0%;
  }
}
</style>

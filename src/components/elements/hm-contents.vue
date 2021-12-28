<template>
  <div class="hm-contents-wrapper" :class="[align]"><slot /></div>
</template>
<script>
export default {
  name: "hm-contents",
  props: {
    align: {
      type: String,
      default: "horizon",
    },
  },
};
</script>
<style lang="scss" scoped>
.hm-contents-wrapper {
  width: 100%;
  font-size: 16rem;

  box-sizing: border-box;
  padding: px(0) px(4);
}

.horizon {
  display: flex;
  align-items: center;
}

.vertical {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>

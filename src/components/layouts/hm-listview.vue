<template>
  <div class="hm-listview-wrapper" :class="[line ? 'line' : '']" @click.stop="clickEventListener"><slot /></div>
</template>
<script>
export default {
  name: "hm-listview",
  props: {
    line: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    clickEventListener(e) {
      this.$emit("click", e);
    },
  },
};
</script>
<style lang="scss" scoped>
.hm-listview-wrapper {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  width: 100%;
  box-sizing: border-box;

  padding: px(10);
}

.line {
  border-bottom: 1px solid $hm-gray;
}
</style>

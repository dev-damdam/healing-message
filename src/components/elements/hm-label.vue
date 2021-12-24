<template>
  <div class="hm-label-wrapper">
    <span><slot /></span>
  </div>
</template>
<script>
export default {
  name: "hm-label",
};
</script>
<style lang="scss" scoped>
.hm-label-wrapper {
  width: 100%;
  font-size: 14rem;
}

.title {
  font-size: 16rem;
  font-weight: bold;
}

.sub-title {
  font-size: 14rem;
}
</style>

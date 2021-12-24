<template>
  <div class="hm-layout-wrapper">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>
<script>
export default {
  name: "hm-layout",
};
</script>
<style lang="scss" scoped>
.hm-layout-wrapper {
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;

  main {
    height: 100%;
    overflow: overlay;
  }
}
</style>

<template>
  <router-view id="app" />
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
html {
  font-size: 1px;
}

body {
  margin: 0;
}

#app {
  width: 100vw;
  height: 100vh;
}

:focus {
  outline: none;
}
</style>

<template>
  <div class="hm-card-wrapper">
    <header class="header" :class="[line ? 'line' : '']">
      <div class="title-wrapper">
        <slot name="header" />
      </div>
      <div v-if="menu" class="menu">
        <font-awesome-icon icon="ellipsis-v" />
      </div>
    </header>
    <main class="contents">
      <slot />
    </main>
    <footer class="footer">
      <slot name="footer" />
    </footer>
  </div>
</template>
<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faEllipsisV} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faEllipsisV);
export default {
  name: "hm-card",
  components: {
    FontAwesomeIcon,
  },
  props: {
    menu: {
      type: Boolean,
      default: false,
    },
    line: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss" scoped>
.hm-card-wrapper {
  width: 100%;
  height: 100%;
  background-color: $hm-green-light10;

  border: 1px solid $hm-green-light40;

  box-sizing: border-box;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: px(50);

    box-sizing: border-box;
    padding: px(8);
  }

  .title-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .header .menu svg {
    width: px(25);
    height: px(25);
  }

  .line {
    border-bottom: 1px solid $hm-green-light40;
  }

  .contents {
    width: 100%;
    max-height: px(200);
    padding: px(10);
    box-sizing: border-box;
    font: normal normal normal 14rem $hm-font;
  }
}
</style>

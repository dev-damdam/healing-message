<template>
  <header class="hm-header-wrapper" :class="[line ? 'line' : '']">
    <div class="icon">
      <font-awesome-icon v-if="lIcon != ''" :icon="lIcon" />
      <slot name="left" v-else />
    </div>
    <div class="title" :class="[align]">
      <span v-if="title != ''">
        {{ title }}
      </span>
      <span v-else><slot /></span>
    </div>
    <div class="icon">
      <font-awesome-icon v-if="rIcon != ''" :icon="rIcon" />
      <slot name="right" v-else />
    </div>
  </header>
</template>
<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {faChevronLeft, faCog, faBell} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

library.add(faChevronLeft, faCog, faBell);
export default {
  name: "hm-header",
  components: {
    FontAwesomeIcon,
  },
  props: {
    line: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: "",
    },
    align: {
      type: String,
      default: "left",
    },
    lIcon: {
      type: String,
      default: "",
    },
    rIcon: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
.hm-header-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: px(54);
  box-sizing: border-box;
  padding: px(7);

  .icon {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon svg {
    width: px(30);
    height: px(30);
  }

  .title {
    width: 100%;
    height: 100%;
    box-sizing: border-box;

    padding: px(0) px(10);
    display: flex;
    align-items: center;

    font: normal normal bold 18rem/ 24rem $hm-font;
  }

  .left {
    justify-content: left;
  }
  .center {
    justify-content: center;
  }
}
.line {
  border-bottom: 1px solid $hm-gray;
}
</style>

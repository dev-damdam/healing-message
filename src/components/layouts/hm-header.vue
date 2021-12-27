<template>
  <header class="hm-header-wrapper" :class="[line ? 'line' : '']">
    <div class="icon" @click="click('left', $event)">
      <hm-icon v-if="lIcon != ''" :icon="lIcon" size="s" />
      <slot name="left" v-else />
    </div>

    <div class="title" :class="[align]">
      <span v-if="title != ''">
        {{ title }}
      </span>
      <span v-else><slot /></span>
    </div>
    <div class="icon" @click="click('right', $event)">
      <hm-icon v-if="rIcon != ''" :icon="rIcon" size="s" />
      <slot name="right" v-else />
    </div>
  </header>
</template>
<script>
import hmIcon from "../elements/hm-icon.vue";

export default {
  name: "hm-header",
  components: {
    hmIcon,
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
    back: {
      type: Boolean,
      default: false,
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

  methods: {
    click(direction, e) {
      if (direction == "left") {
        if (this.back) this.moveBackPage(e);
        else this.$emit("left-click", e);
      } else {
        this.$emit("right-click", e);
      }
    },
    moveBackPage(e) {
      this.$emit("back", e);
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

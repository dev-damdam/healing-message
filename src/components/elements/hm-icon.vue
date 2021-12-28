<template>
  <div class="hm-icon-wrapper">
    <div v-if="icon != ''" class="icon">
      <font-awesome-icon :icon="icon" :size="faSize" />
    </div>

    <div v-else class="image" :class="[size, shape]" :style="{'background-image': 'url(' + src + ')'}"></div>
  </div>
</template>
<script>
import {library} from "@fortawesome/fontawesome-svg-core";
import {
  faCheck,
  faChevronLeft,
  faChevronDown,
  faChevronUp,
  faCog,
  faBell,
  faPencilAlt,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
library.add(faChevronLeft, faChevronDown, faChevronUp, faCog, faBell, faPencilAlt, faCheck);

export default {
  name: "hm-icon",
  props: {
    icon: {
      type: String,
      default: "",
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
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      faSize: "",
    };
  },
  created() {
    if (this.size == "xs") {
      this.faSize = "lg";
    } else if (this.size == "s") {
      this.faSize = "2x";
    } else if (this.size == "m") {
      this.faSize = "3x";
    } else if (this.size == "l") {
      this.faSize = "4x";
    } else {
      this.faSize = "5x";
    }
  },
};
</script>
<style lang="scss" scoped>
.hm-icon-wrapper {
  display: inline-block;
  font-size: 16rem;

  .image {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
  }

  .xs {
    width: px(20);
    height: px(20);
  }
  .s {
    width: px(35);
    height: px(35);
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

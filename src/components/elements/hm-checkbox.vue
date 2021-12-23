<template>
  <div class="hm-checkbox">
    <input
      type="checkbox"
      :id="this.ckbId"
      :value="modelValue"
      @input="changeEventListener"
    />
    <label :for="this.ckbId">
      <font-awesome-icon icon="check" />
      <span class="checkbox-label"><slot /></span>
    </label>
  </div>
</template>
<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCheck);

export default {
  name: "hm-checkbox",
  components: { FontAwesomeIcon },
  props: {
    modelValue: {
      requried: true,
      type: [Array, Boolean],
    },
    id: {
      requried: true,
      type: String,
    },
    value: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      ckbId: "",
      checkedValue: [],
    };
  },
  created() {
    this.ckbId = "ckb_" + this.id;
    this.checkedValue = this.modelValue;
  },

  methods: {
    changeEventListener(e) {
      if (Array.isArray(this.modelValue)) {
        if (e.target.checked) {
          //push
          if (!this.modelValue.includes(this.value)) {
            this.checkedValue.push(this.value);
          }
        } else {
          // delete
          let idx = this.checkedValue.indexOf(this.value);
          this.checkedValue.splice(idx, 1);
        }

        this.$emit("update:modelValue", this.checkedValue);
      } else {
        this.$emit("update:modelValue", e.target.checked);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.hm-checkbox {
  width: 100%;
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] + label {
    width: 100%;
    display: flex;
    align-items: center;
  }

  input[type="checkbox"] + label svg {
    display: inline-block;
    width: px(6);
    height: px(6);
    border: px(1) solid $hm-default;
    border-radius: px(2);

    margin-right: px(2);

    color: transparent;
  }

  input[type="checkbox"]:checked + label svg {
    color: $hm-default;
  }
}

.checkbox-label {
  width: 100%;
  font: normal normal normal 14rem/17rem $hm-font;
}
</style>

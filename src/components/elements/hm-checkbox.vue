<template>
  <div class="hm-checkbox">
    <input type="checkbox" :id="this.ckbId" :value="modelValue" @input="changeEventListener" />
    <label :for="this.ckbId">
      <hm-icon icon="check" class="checkbox-icon" size="xs" />
      <span class="checkbox-label"><slot /></span>
    </label>
  </div>
</template>
<script>
import hmIcon from "../elements/hm-icon.vue";

export default {
  name: "hm-checkbox",
  components: {hmIcon},
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

  input[type="checkbox"] + label .checkbox-icon {
    font-size: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: px(1) solid $hm-default;
    border-radius: px(2);
    margin-right: px(2);

    color: transparent;
  }

  input[type="checkbox"]:checked + label .checkbox-icon {
    color: $hm-default;
  }
}

.checkbox-label {
  width: 100%;
  font: normal normal normal 14rem/17rem $hm-font;
}
</style>

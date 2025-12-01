<template>
  <div class="page">
    <h2>vue-color ChromePicker Demo</h2>

    <Chrome v-model="color" />

    <p>HEX: {{ color.hex }}</p>
    <p>RGB: {{ rgb }}</p>
  </div>
</template>

<script>
import { Chrome } from "@ckpack/vue-color";

export default {
  components: { Chrome },
  data() {
    return {
      color: { hex: "#ff0000", rgb: { r: 255, g: 0, b: 0 } },
    };
  },
  computed: {
    rgb() {
      const { r, g, b } = this.color.rgb;
      return `rgb(${r}, ${g}, ${b})`;
    },
  },
};
</script>

<template>
  <div class="page">
    <h2>Iro.js Demo</h2>
    <div ref="iroBox"></div>
    <p>HEX: {{ hex }}</p>
    <p>RGB: {{ rgb }}</p>
  </div>
</template>

<script>
import iro from "@jaames/iro";

export default {
  data() {
    return { hex: "", rgb: "" };
  },
  mounted() {
    const picker = new iro.ColorPicker(this.$refs.iroBox, {
      width: 250,
      color: "#ff0000",
    });

    picker.on("color:change", (color) => {
      this.hex = color.hexString;
      this.rgb = color.rgbString;
    });
  },
};
</script>

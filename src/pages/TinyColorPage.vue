<template>
  <div class="page">
    <h2>TinyColor2 색상 변환 Demo</h2>
    <input v-model="input" placeholder="예: #ff0000 or rgb(255,0,0)" />
    <button @click="convert">변환하기</button>

    <div v-if="result">
      <p>HEX: {{ result.hex }}</p>
      <p>RGB: {{ result.rgb }}</p>
      <p>HSL: {{ result.hsl }}</p>
      <p>HSV: {{ result.hsv }}</p>
    </div>
  </div>
</template>

<script>
import tinycolor from "tinycolor2";

export default {
  data() {
    return { input: "#ff0000", result: null };
  },
  methods: {
    convert() {
      const c = tinycolor(this.input);
      this.result = {
        hex: c.toHexString(),
        rgb: c.toRgbString(),
        hsl: c.toHslString(),
        hsv: c.toHsvString(),
      };
    },
  },
};
</script>

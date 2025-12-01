<template>
  <div class="page">
    <h2>Pickr Demo</h2>
    <div id="pickr"></div>
    <p>HEX: {{ hex }}</p>
    <p>RGB: {{ rgb }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Pickr from "@simonwep/pickr";
import "@simonwep/pickr/dist/themes/classic.min.css";

const hex = ref("#ff0000");
const rgb = ref("");
let pickr = null;

onMounted(() => {
  pickr = Pickr.create({
    el: "#pickr",
    theme: "classic",
    default: "#ff0000",
    components: {
      preview: true,
      opacity: true,
      hue: true,
      interaction: {
        hex: true,
        rgba: true,
        input: true,
      },
    },
  });

  pickr.on("change", (color) => {
    hex.value = color.toHEXA().toString();
    rgb.value = color.toRGBA().toString();
  });
});

// Pickr 메모리 누수 방지
onBeforeUnmount(() => {
  pickr && pickr.destroy();
});
</script>

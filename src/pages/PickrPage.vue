<template>
  <div class="page">
    <h2>Pickr Demo</h2>
    <div id="pickr-container">
      <div class="pickr-wrapper">
        <div id="pickr"></div>
      </div>
    </div>
    <p>HEX: {{ hex }}</p>
    <p>RGB: {{ rgb }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from "vue";
import Pickr from "@simonwep/pickr";
import "@simonwep/pickr/dist/themes/classic.min.css";

const hex = ref("#ff0000");
const rgb = ref("");
let pickr = null;

onMounted(async () => {
  await nextTick();

  try {
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
          hsla: true,
        },
      },
      strings: {
        save: "Save",
        cancel: "Cancel",
      },
    });

    if (pickr) {
      pickr.on("change", (color) => {
        hex.value = color.toHEXA().toString();
        rgb.value = color.toRGBA().toString();
      });

      pickr.on("init", (instance) => {
        console.log("Pickr initialized successfully", instance);
      });
    }
  } catch (error) {
    console.error("Pickr initialization error:", error);
  }
});

onBeforeUnmount(() => {
  if (pickr) {
    pickr.destroy();
    pickr = null;
  }
});
</script>

<style scoped>
#pickr-container {
  margin: 20px 0;
  display: flex;
  align-items: flex-start;
}

.pickr-wrapper {
  position: relative;
  z-index: 1000;
}

#pickr {
  width: 100%;
  max-width: 300px;
}

/* Pickr 드롭다운이 화면 밖으로 나가지 않도록 */
:deep(.pcr-app) {
  position: fixed !important;
  z-index: 10000;
}
</style>

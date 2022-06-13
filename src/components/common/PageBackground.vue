<template>
  <div
    class="h-full relative section"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: "PageBackground",
  props: {
    desktopBgImage: {
      type: String,
      required: true,
    },
    mobileBgImage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      backgroundImage: "",
    };
  },
  methods: {
    onResize() {
      const width = window.innerWidth;
      if (width <= 600) {
        this.backgroundImage = this.mobileBgImage;
      } else {
        this.backgroundImage = this.desktopBgImage;
      }
    },
  },
  created() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  unmounted() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style lang="scss" scoped>
.section {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  @media screen and (max-width: 576px) {
    background-position: center bottom;
  }
}
</style>
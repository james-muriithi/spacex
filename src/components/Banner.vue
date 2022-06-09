<template>
  <section
    id="banner"
    class="h-full relative"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  ></section>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      backgroundImage: "",
      mobileBgImage: "/images/banner-mobile.webp",
      desktopBgImage: "/images/banner-desktop.webp",
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
  destroyed() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style lang="scss" scoped>
section {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  @media screen and (max-width: 576px) {
    background-position: center bottom;
  }
  img.bg {
    object-fit: cover;
  }
}
</style>
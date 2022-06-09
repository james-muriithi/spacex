<template>
  <section
    class="h-full relative"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="absolute bottom-32 text-white left-20">
      <h4 class="uppercase text-xl font-normal mb-4" v-if="subTitle">
        {{ subTitle }}
      </h4>
      <h2 class="text-5xl font-bold">{{ title }}</h2>
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  name: "PageSection",
  props: {
    desktopBgImage: {
      type: String,
      required: true,
    },
    mobileBgImage: {
      type: String,
      required: true,
    },
    subTitle: {
      type: String,
      required: false,
    },
    title: {
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
}
</style>
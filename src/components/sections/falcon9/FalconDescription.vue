<template>
  <PageBackground
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
    :class="{ 'bg-attached': scrolledToElement }"
    ref="falconDescription"
  >
    <div class="flex items-center h-full text-white px-14">
      <div class="grid sm:grid-cols-2">
        <p class="text-lg sm:text-xl font-light">
          Falcon 9 is a reusable, two-stage rocket designed and manufactured by
          SpaceX for the reliable and safe transport of people and payloads into
          Earth orbit and beyond. Falcon 9 is the world's first orbital class
          reusable rocket. Reusability allows SpaceX to refly the most expensive
          parts of the rocket, which in turn drives down the cost of space
          access.
        </p>
      </div>
    </div>
  </PageBackground>
</template>

<script>
import PageBackground from "@/components/common/PageBackground.vue";
export default {
  name: "FalconDescription",
  components: { PageBackground },
  data() {
    return {
      scrolledToElement: false,
    };
  },
  methods: {
    onScroll() {
      this.scrolledToElement =
        window.scrollY >= this.$refs.falconDescription.$el.offsetTop &&
        window.scrollY <
          this.$refs.falconDescription.$el.offsetTop +
            this.$refs.falconDescription.$el.offsetHeight;
    },
  },
  created() {
    this.mobileBgImage = "/images/f9-lines-mobile.webp";
    this.desktopBgImage = "/images/f9-lines-desktop.webp";

    window.addEventListener("scroll", this.onScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss" scoped>
.bg-attached {
  background-attachment: fixed;
}
</style>
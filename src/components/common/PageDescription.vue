<template>
  <PageBackground
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
    :class="{ 'bg-attached': scrolledToElement }"
    ref="falconDescription"
  >
    <div class="flex items-center h-full text-white px-8 md:px-14">
      <div class="grid sm:grid-cols-2">
        <p class="text-lg sm:text-xl font-light">
          {{ description }}
        </p>
      </div>
    </div>
  </PageBackground>
</template>

<script>
import PageBackground from "./PageBackground.vue";
export default {
  name: "PageDescription",
  components: { PageBackground },
  props: {
    desktopBgImage: {
      type: String,
      required: true,
    },
    mobileBgImage: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
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
<template>
  <div
    class="h-full relative section"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <slot />
    <PageScrollDown />
  </div>
</template>

<script>
import PageScrollDown from './PageScrollDown.vue';
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
            innerWidth: window.innerWidth,
        };
    },
    computed: {
        backgroundImage() {
            return this.getBg(this.innerWidth);
        },
    },
    methods: {
        getBg(width) {
            return width <= 600 ? this.mobileBgImage : this.desktopBgImage;
        },
        onResize() {
            this.innerWidth = window.innerWidth;
        },
    },
    created() {
        window.addEventListener("resize", this.onResize);
    },
    unmounted() {
        window.removeEventListener("resize", this.onResize);
    },
    components: { PageScrollDown }
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
<template>
  <section
    class="h-full relative"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="absolute bottom-32 text-white left-8 lg:left-20 md:w-1/2">
      <h4 class="uppercase text-xl font-normal mb-4" v-if="subTitle">
        {{ subTitle }}
      </h4>
      <h2 class="text-3xl lg:text-5xl font-bold">{{ title }}</h2>
      <SectionButton to="#"> {{ buttonText }} </SectionButton>
    </div>
    <div class="absolute bottom-4 w-full text-white hidden md:block">
      <div class="text-center scroll-down-arrow">
        <span class="material-icons text-5xl font-light cursor-pointer">
          keyboard_arrow_down
        </span>
      </div>
    </div>
  </section>
</template>

<script>
import SectionButton from "./SectionButton.vue";
export default {
  components: { SectionButton },
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
    buttonText: {
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
  .scroll-down-arrow {
    opacity: 0;
    visibility: inherit;
    animation: scrolldown 3s infinite;
  }
}

@keyframes scrolldown {
  0% {
    opacity: 0;
    transform: translate3d(0px, -20px, 0px);
  }

  100% {
    opacity: 1;
    transform: translate3d(0px, -10px, 0px);
  }
}
</style>
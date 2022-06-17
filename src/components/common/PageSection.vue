<template>
  <PageBackground
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
  >
  <slot />
    <div class="absolute bottom-32 text-white left-8 lg:left-20 md:w-1/2">
      <h4 class="uppercase md:text-xl font-normal mb-2" v-if="subTitle">
        {{ subTitle }}
      </h4>
      <h2 class="text-3xl lg:text-5xl font-bold uppercase">{{ title }}</h2>
      <SectionButton to="#" v-if="buttonText"> {{ buttonText }} </SectionButton>
    </div>
    <div class="absolute bottom-4 w-full text-white hidden md:block">
      <div class="text-center scroll-down-arrow">
        <span class="material-icons text-5xl cursor-pointer">
          keyboard_arrow_down
        </span>
      </div>
    </div>
  </PageBackground>
</template>

<script>
import PageBackground from "./PageBackground.vue";
import SectionButton from "./SectionButton.vue";

export default {
  components: { SectionButton, PageBackground },
  name: "PageSection",
  props: {
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
      required: false,
    },
    desktopBgImage: {
      type: String,
      required: true,
    },
    mobileBgImage: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-down-arrow {
  opacity: 0;
  visibility: inherit;
  animation: scrolldown 3s infinite;
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
<template>
  <PageBackground
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
  >
  <slot />
    <div class="absolute bottom-32 text-white left-4 md:left-8 lg:left-20 md:w-2/5 lg:w-1/3">
      <h4 class="uppercase md:text-xl font-normal mb-2" v-if="subTitle">
        {{ subTitle }}
      </h4>
      <h2 class="text-3xl lg:text-5xl font-bold uppercase">{{ title }}</h2>
      <SectionButton to="#" v-if="buttonText"> {{ buttonText }} </SectionButton>
    </div>
    <PageScrollDown />
  </PageBackground>
</template>

<script>
import PageBackground from "./PageBackground.vue";
import SectionButton from "./SectionButton.vue";
import PageScrollDown from "./PageScrollDown.vue";

export default {
  components: { SectionButton, PageBackground, PageScrollDown },
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
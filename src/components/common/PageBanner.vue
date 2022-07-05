<template>
  <PageBackground
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
  >
    <div class="flex items-center justify-center h-full text-white">
      <div class="text-center mx-10">
        <h2 class="text-5xl lg:text-8xl font-bold uppercase mb-5">
            {{title}}
        </h2>
        <h4 class="uppercase sm:text-xl font-medium mt-4 text-center">
          {{subTitle}}
        </h4>
      </div>
    </div>
  </PageBackground>
</template>

<script>
import PageBackground from "./PageBackground.vue";
export default {
  components: { PageBackground },
  name: "PageBanner",
  props: {
    desktopBgImage: {
      type: String,
      required: true,
    },
    mobileBgImage: {
      type: String,
      required: true,
    },
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
  },
};
</script>
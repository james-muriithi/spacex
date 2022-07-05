<template>
  <PageSection
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
    :title="title"
    :subTitle="subTitle"
    class="falcon-flight relative"
  >
  <div class="absolute h-full top-0 left-0 w-full flex items-center justify-center text-white">
    <span class="material-icons text-7xl cursor-pointer">play_arrow</span>
  </div>
  </PageSection>
</template>

<script>
import PageSection from "./PageSection.vue";

export default {
  name: "PageVideo",
  components: { PageSection },
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

<style lang="scss" scoped>
.falcon-flight {
    @media screen and (max-width: 576px) {
        background-position: 53% 50%;
    }
}
</style>
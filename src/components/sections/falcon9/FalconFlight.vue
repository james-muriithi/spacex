<template>
  <PageSection
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
    title="falcon 9 in flight"
    subTitle="video"
    class="falcon-flight relative"
  >
  <div class="absolute h-full top-0 left-0 w-full flex items-center justify-center text-white">
    <span class="material-icons text-7xl cursor-pointer">play_arrow</span>
  </div>
  </PageSection>
</template>

<script>
import PageSection from "../../common/PageSection.vue";

export default {
  name: "FalconFlight",
  components: { PageSection },
  created() {
    this.mobileBgImage = "/images/f9_desktop_video.webp";
    this.desktopBgImage = "/images/f9_desktop_video.webp";
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
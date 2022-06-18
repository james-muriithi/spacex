<template>
  <PageBackground
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
    class="falcon-engines relative"
  >
    <FalconEnginesContent
      :tab="currentTab"
      @tabChange="currentTab = $event"
      class="hidden sm:flex"
    />
  </PageBackground>
  <FalconEnginesContent
    :tab="currentTab"
    @tabChange="currentTab = $event"
    class="mb-10 block sm:hidden"
  />
</template>

<script>
import PageBackground from "../../common/PageBackground.vue";
import FalconEnginesContent from "./FalconEnginesContent.vue";

export default {
  name: "FalconEngines",
  components: { PageBackground, FalconEnginesContent },
  data() {
    return {
      currentTab: "sea-level",
      mobileBgImage: "/images/merlin-mobile.webp",
      desktopBgImage: "/images/merlin-desktop.webp",
    };
  },
  computed: {
    bgData: () => ({
      "sea-level": {
        mobileBgImage: "/images/merlin-mobile.webp",
        desktopBgImage: "/images/merlin-desktop.webp",
      },
      vacuum: {
        mobileBgImage: "/images/merlin-vac-mobile.webp",
        desktopBgImage: "/images/merlin-vac-desktop.webp",
      },
    }),
  },
  created() {
    this.mobileBgImage = this.bgData[this.currentTab].mobileBgImage;
    this.desktopBgImage = this.bgData[this.currentTab].desktopBgImage;
  },
  watch: {
    currentTab(value) {
      this.mobileBgImage = this.bgData[value].mobileBgImage;
      this.desktopBgImage = this.bgData[value].desktopBgImage;
    },
  },
};
</script>

<style lang="scss" scoped>
.falcon-engines {
  @media screen and (max-width: 576px) {
    height: 60%;
  }
}
</style>
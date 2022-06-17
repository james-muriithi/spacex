<template>
  <PageBackground
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
    class="falcon-engines relative"
  >
    <FalconEnginesContent class="hidden sm:flex" />
  </PageBackground>
  <FalconEnginesContent class="mb-10 block sm:hidden" />
</template>

<script>
import PageBackground from "../../common/PageBackground.vue";
import FalconEnginesContent from "./FalconEnginesContent.vue";

export default {
  name: "FalconEngines",
  components: { PageBackground, FalconEnginesContent },
  created() {
    this.mobileBgImage = "/images/merlin-mobile.webp";
    this.desktopBgImage = "/images/merlin-desktop.webp";
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
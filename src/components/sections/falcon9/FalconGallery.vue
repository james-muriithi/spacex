<template>
  <PageBackground
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
  >
  </PageBackground>
</template>

<script>
import PageBackground from "../../common/PageBackground.vue";

export default {
  name: "FalconGallery",
  components: { PageBackground },
  created() {
    this.mobileBgImage = "/images/falcon-g1-mobile.webp";
    this.desktopBgImage = "/images/falcon-g1-desktop.webp";
  },
};
</script>
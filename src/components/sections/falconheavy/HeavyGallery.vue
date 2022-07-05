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
  name: "HeavyGallery",
  components: { PageBackground },
  created() {
    this.mobileBgImage = "/images/FH_1_mobile.webp";
    this.desktopBgImage = "/images/FH_1.webp";
  },
};
</script>
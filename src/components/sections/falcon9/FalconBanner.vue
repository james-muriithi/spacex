<template>
  <PageBackground
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
  >
  </PageBackground>
</template>

<script>
import PageBackground from '../../common/PageBackground.vue';
export default {
  components: { PageBackground },
  name: "FalconBanner",
  created() {
    this.mobileBgImage = "/images/f9_feature.webp";
    this.desktopBgImage = "/images/f9_feature.webp";
  },
};
</script>
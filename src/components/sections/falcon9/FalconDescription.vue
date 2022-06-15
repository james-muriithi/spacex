<template>
  <PageBackground
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
  >
  </PageBackground>
</template>

<script>
import PageBackground from '@/components/common/PageBackground.vue';
export default {
  name: "FalconDescription",
  components: { PageBackground },
  created() {
    this.mobileBgImage = "/images/f9-lines-mobile.webp";
    this.desktopBgImage = "/images/f9-lines-desktop.webp";
  },
};
</script>
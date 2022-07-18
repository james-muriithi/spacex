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
  name: "DragonGallery",
  components: { PageBackground },
  created() {
    this.mobileBgImage = "/images/DRAGON_DM2_LC39A_800x1200_Mobile.webp";
    this.desktopBgImage = "/images/DRAGON_DM2_LC39A_3840x2560.webp";
  },
};
</script>
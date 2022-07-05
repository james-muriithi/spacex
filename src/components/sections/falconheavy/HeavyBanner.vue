<template>
  <PageBanner
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
    title="falcon heavy"
    subTitle="THE WORLD’S MOST POWERFUL ROCKET"
  />
</template>

<script>
import PageBanner from "../../common/PageBanner.vue";
export default {
  components: { PageBanner },
  name: "HeavyBanner",
  created() {
    this.mobileBgImage = "/images/fh_feature-mobile.webp";
    this.desktopBgImage = "/images/fh_feature.webp";
  },
};
</script>
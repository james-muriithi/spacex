<template>
  <PageBanner
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
    title="Dragon"
    subTitle="SENDING HUMANS AND CARGO INTO SPACE"
  />
</template>

<script>
import PageBanner from "../../common/PageBanner.vue";
export default {
  components: { PageBanner },
  name: "DragonBanner",
  created() {
    this.mobileBgImage = "/images/dragon_feature_mobile.webp";
    this.desktopBgImage = "/images/dragon_feature.webp";
  },
};
</script>
<template>
  <PageBanner
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
    title="Falcon 9"
    subTitle="FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT"
  />
</template>

<script>
import PageBanner from "../../common/PageBanner.vue";
export default {
  components: { PageBanner },
  name: "FalconBanner",
  created() {
    this.mobileBgImage = "/images/f9_feature.webp";
    this.desktopBgImage = "/images/f9_feature.webp";
  },
};
</script>
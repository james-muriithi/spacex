<template>
  <PageSection
    id="banner"
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
    title="NILESAT 301 MISSION"
    subTitle="recent mission"
  >
    <SectionButton to="#"> Rewatch </SectionButton>
  </PageSection>
</template>

<script>
import SectionButton from "./SectionButton.vue";
export default {
  components: { SectionButton },
  name: "Banner",
  computed: {
    mobileBgImage: () => "/images/banner-mobile.webp",
    desktopBgImage: () => "/images/banner-desktop.webp",
  },
};
</script>
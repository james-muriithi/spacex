<template>
  <PageSection
    id="banner"
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
  >
    Helo
  </PageSection>
</template>

<script>
export default {
  name: "Banner",
  computed: {
    mobileBgImage: () => "/images/banner-mobile.webp",
    desktopBgImage: () => "/images/banner-desktop.webp",
  },
};
</script>
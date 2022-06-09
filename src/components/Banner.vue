<template>
  <PageSection
    id="banner"
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
  >
    <div class="absolute bottom-32 text-white left-20">
      <h4 class="uppercase text-xl font-normal mb-4">
        recent mission
      </h4>
      <h2 class="text-5xl font-bold">
        NILESAT 301 MISSION
      </h2>
      <SectionButton />
    </div>
  </PageSection>
</template>

<script>
import SectionButton from './SectionButton.vue';
export default {
    name: "Banner",
    computed: {
        mobileBgImage: () => "/images/banner-mobile.webp",
        desktopBgImage: () => "/images/banner-desktop.webp",
    },
    components: { SectionButton }
};
</script>
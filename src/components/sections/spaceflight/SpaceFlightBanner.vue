<template>
  <PageBackground
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
  >
    <div class="flex items-center justify-center h-full text-white">
      <div class="text-center mx-10 mb-8 sm:mb-0">
        <h2 class="text-5xl lg:text-8xl font-bold uppercase mb-5">
          Human spaceflight
        </h2>
        <h4 class="uppercase sm:text-xl font-medium mt-1 sm:mt-4 text-center">
          MAKING LIFE MULTIPLANETARY
        </h4>
      </div>
    </div>
  </PageBackground>
</template>  
  
<script>
import PageBackground from "@/components/common/PageBackground.vue";
export default {
  name: "SpaceFlightBanner",
  components: { PageBackground },
  created() {
    this.mobileBgImage = "/images/human_spaceflight_feature_mobile.webp";
    this.desktopBgImage = "/images/human_spaceflight_feature.webp";
  },
};
</script>
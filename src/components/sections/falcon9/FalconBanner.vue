<template>
  <PageBackground
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
  >
    <div class="flex items-center justify-center h-full text-white">
      <div class="text-center mx-10">
        <h2 class="text-5xl lg:text-8xl font-bold uppercase mb-5">Falcon 9</h2>
        <h4 class="uppercase sm:text-xl font-medium mt-4 text-center">
          FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT
        </h4>
      </div>
    </div>
  </PageBackground>
</template>

<script>
import PageBackground from "../../common/PageBackground.vue";
export default {
  components: { PageBackground },
  name: "FalconBanner",
  created() {
    this.mobileBgImage = "/images/f9_feature.webp";
    this.desktopBgImage = "/images/f9_feature.webp";
  },
};
</script>
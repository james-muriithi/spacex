<template>
  <PageBackground
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
  >
    <div class="container h-full text-white">
      <div class="grid md:grid-cols-2 lg:gap-32 h-full">
        <div class="hidden sm:block"></div>
        <div class="pl-6 sm:my-auto">
          <div class="w-3/4 lg:mx-auto">
            <h4 class="uppercase md:text-xl font-normal mb-2">
              mission
            </h4>
            <h2 class="text-5xl lg:text-7xl font-bold uppercase">
              moon
            </h2>
            <h4 class="uppercase md:text-xl font-normal my-2 lg:pr-10 text-gray-300">
              RETURNING HUMANS TO OUR LUNAR NEIGHBOR
            </h4>
            <SectionButton to="#">
              EXPLORE
            </SectionButton>
          </div>
        </div>
      </div>
    </div>
  </PageBackground>
</template>  
  
<script>
import PageBackground from "../../common/PageBackground.vue";
import SectionButton from "../../common/SectionButton.vue";

export default {
  components: { PageBackground, SectionButton },
  name: "Moon",
  created() {
    this.mobileBgImage = "/images/human_spaceflight_moon-mobile.jpeg";
    this.desktopBgImage = "/images/human_spaceflight_moon.jpeg";
  },
};
</script>
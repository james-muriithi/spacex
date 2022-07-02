<template>
  <PageBackground
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
  >
    <div class="container h-full text-white">
      <div class="grid md:grid-cols-2 lg:gap-32 h-full">
        <div class="pl-6 sm:my-auto">
          <div class="w-3/4 lg:mx-auto">
            <h4 class="uppercase md:text-xl font-normal mb-5">
              mission
            </h4>
            <h2 class="text-4xl lg:text-5xl font-bold uppercase">
              space station
            </h2>
            <h4 class="uppercase font-normal my-2 lg:pr-10 text-gray-300">
              TRANSPORTING HUMANS TO THE ORBITING LABORATORY IN THE SKY
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
  name: "SpaceStation",
  created() {
    this.mobileBgImage = "/images/human_spaceflight_iss-mobile.jpeg";
    this.desktopBgImage = "/images/human_spaceflight_iss.jpeg";
  },
};
</script>
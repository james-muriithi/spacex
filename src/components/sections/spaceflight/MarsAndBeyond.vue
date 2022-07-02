<template>
  <PageBackground
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
  >
    <div class="container h-full text-white">
      <div class="grid md:grid-cols-2 lg:gap-32 h-full">
        <div class="pl-6 sm:my-auto">
          <div class="w-3/4 ml-auto lg:mx-auto">
            <h4 class="uppercase md:text-xl font-normal mb-5">
              mission
            </h4>
            <h2 class="text-4xl lg:text-5xl font-bold uppercase">
              mars &amp; beyond
            </h2>
            <h4 class="uppercase font-normal my-2 lg:pr-10 text-gray-300">
              THE ROAD TO MAKING HUMANITY MULTIPLANETARY
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
  name: "MarsAndBeyond",
  created() {
    this.mobileBgImage = "/images/human_spaceflight_mars-mobile.jpeg";
    this.desktopBgImage = "/images/human_spaceflight_mars.jpeg";
  },
};
</script>
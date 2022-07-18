<template>
  <PageBackground
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
  >
    <div class="grid sm:grid-cols-2 gap-12 px-6">
      <div class="hidden sm:block"></div>
      <div class="text-white pt-20">
        <h2 class="text-3xl md:text-5xl font-bold uppercase">
          TAKING HUMANS TO SPACE
        </h2>
        <p class="mt-10  md:pr-20">
          In 2020, SpaceX returned America’s ability to fly NASA astronauts to
          and from the International Space Station on American vehicles for the
          first time since 2011. In addition to flying astronauts to space for
          NASA, SpaceX’s Dragon spacecraft can also carry commercial astronauts
          to Earth orbit, the ISS or beyond.
        </p>
        <div class="mt-12 md:mt-16">
          <SectionButton to="#">learn more</SectionButton>
        </div>
      </div>
    </div>
  </PageBackground>
</template>

<script>
import PageBackground from "../../common/PageBackground.vue";
import SectionButton from "../../common/SectionButton.vue";

export default {
  name: "DragonToSpace",
  components: { PageBackground, SectionButton },
  created() {
    this.mobileBgImage = "/images/dragon_humans-mobile.webp";
    this.desktopBgImage = "/images/dragon_humans.webp";
  },
};
</script>
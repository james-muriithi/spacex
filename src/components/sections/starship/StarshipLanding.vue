<template>
  <PageBackground
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
  >
    <div class="grid sm:grid-cols-2 gap-12 px-6">
      <div class="hidden sm:block"></div>
      <div class="text-white pt-20">
        <h2 class="text-3xl md:text-5xl font-bold uppercase">
          LANDING ON MARS
        </h2>
        <p class="mt-10 md:pr-20">
          Starship will enter Mars’ atmosphere at 7.5 kilometers per second and
          decelerate aerodynamically. The vehicle’s heat shield is designed to
          withstand multiple entries, but given that the vehicle is coming into
          Mars' atmosphere so hot, we still expect to see some ablation of the
          heat shield (similar to wear and tear on a brake pad). The engineering
          video below simulates the physics of Mars entry for Starship.
        </p>
        <div class="mt-12 md:mt-16">
          <SectionButton to="#">watch simulation</SectionButton>
        </div>
      </div>
    </div>
  </PageBackground>
</template>

<script>
import PageBackground from "../../common/PageBackground.vue";
import SectionButton from "../../common/SectionButton.vue";

export default {
  name: "StarshipLanding",
  components: { PageBackground, SectionButton },
  created() {
    this.mobileBgImage = "/images/mars_landing-mobile.webp";
    this.desktopBgImage = "/images/mars_landing.webp";
  },
};
</script>
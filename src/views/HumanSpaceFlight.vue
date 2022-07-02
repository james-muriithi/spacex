<template>
  <SpaceFlightBanner />
  <div class="bg-dark container mx-auto py-10 lg:py-20 text-white">
    <div class="flex px-5">
      <div class="w-full lg:w-1/2 mx-auto">
        <p class="text-lg text-gray-300">
          SpaceX also offers commercial flights to both Earth and Lunar orbit.
          <br />
          To start planning your journey, please contact us at
          <a tabindex="0" href="mailto:sales@spacex.com">sales@spacex.com</a>.
        </p>
      </div>
    </div>
  </div>
  <EarthOrbit />
  <SpaceStation />
  <Moon />
  <MarsAndBeyond />
  <FooterInfo
    saleText="For inquiries about our private passenger program, contact"
  >
    <SectionButton class="md:mr-6 text-white px-6 lg:px-7">
      Contact us
    </SectionButton>
  </FooterInfo>
</template>  
  
<script>
import EarthOrbit from "../components/sections/spaceflight/EarthOrbit.vue";
import MarsAndBeyond from "../components/sections/spaceflight/MarsAndBeyond.vue";
import Moon from "../components/sections/spaceflight/Moon.vue";
import SpaceFlightBanner from "../components/sections/spaceflight/SpaceFlightBanner.vue";
import SpaceStation from "../components/sections/spaceflight/SpaceStation.vue";
import FooterInfo from "../components/common/FooterInfo.vue";
import SectionButton from "../components/common/SectionButton.vue";
export default {
  name: "HumanSpaceFlight",
  components: {
    SpaceFlightBanner,
    EarthOrbit,
    SpaceStation,
    Moon,
    MarsAndBeyond,
    FooterInfo,
    SectionButton,
  },
};
</script>
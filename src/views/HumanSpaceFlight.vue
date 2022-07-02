<template>
  <SpaceFlightBanner />
  <div class="bg-dark container mx-auto py-10 lg:py-20 text-white">
    <div class="flex">
      <div class="w-1/2 mx-auto">
        <p class="text-lg">
          SpaceX also offers commercial flights to both Earth and Lunar orbit.
          <br />
          To start planning your journey, please contact us at
          <a tabindex="0" href="mailto:sales@spacex.com">sales@spacex.com</a>.
        </p>
      </div>
    </div>
  </div>
</template>  
  
<script>
import SpaceFlightBanner from "../components/sections/spaceflight/SpaceFlightBanner.vue";
export default {
  name: "HumanSpaceFlight",
  components: { SpaceFlightBanner },
};
</script>
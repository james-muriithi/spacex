<template>
  <StarshipBanner />
  <StarshipInfo />
  <StarshipDescription />
  <StarshipOverview />
  <StarshipVideo />
  <StarshipLanding />
  <FalconEngines />
  <StarshipGallery />
  <FooterInfo />
</template>  
  
<script>
import StarshipBanner from "@/components/sections/starship/StarshipBanner.vue";
import FooterInfo from '../components/common/FooterInfo.vue';
import StarshipDescription from "../components/sections/starship/StarshipDescription.vue";
import StarshipInfo from "../components/sections/starship/StarshipInfo.vue";
import StarshipOverview from "../components/sections/starship/StarshipOverview.vue";
import StarshipVideo from "../components/sections/starship/StarshipVideo.vue";
import StarshipLanding from "../components/sections/starship/StarshipLanding.vue";
import FalconEngines from "../components/sections/falcon9/FalconEngines.vue";
import StarshipGallery from "../components/sections/starship/StarshipGallery.vue";

export default {
  name: "Starship",
  components: {
    StarshipBanner,
    FooterInfo,
    StarshipDescription,
    StarshipInfo,
    StarshipOverview,
    StarshipVideo,
    StarshipLanding,
    FalconEngines,
    StarshipGallery
},
};
</script>
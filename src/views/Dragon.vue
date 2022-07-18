<template>
  <DragonBanner />
  <Statistics />
  <DragonDescription />
  <DragonOverview />
  <DragonVideo />
  <DragonToSpace />
  <FalconEngines />
  <DragonGallery />
</template>  
  
<script>
import DragonBanner from "../components/sections/dragon/DragonBanner.vue";
import DragonDescription from "../components/sections/dragon/DragonDescription.vue";
import DragonGallery from '../components/sections/dragon/DragonGallery.vue';
import DragonOverview from "../components/sections/dragon/DragonOverview.vue";
import DragonToSpace from '../components/sections/dragon/DragonToSpace.vue';
import DragonVideo from '../components/sections/dragon/DragonVideo.vue';
import FalconEngines from '../components/sections/falcon9/FalconEngines.vue';
import Statistics from "../components/sections/falcon9/Statistics.vue";
export default {
  name: "Dragon",
  components: { DragonBanner, Statistics, DragonDescription, DragonOverview, DragonVideo, DragonToSpace, FalconEngines, DragonGallery },
};
</script>
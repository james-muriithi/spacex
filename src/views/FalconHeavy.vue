<template>  
    <HeavyBanner />
    <Statistics />
    <HeavyDescription />
    <HeavyFlight />
    <HeavyVideo />
    <FalconEngines />
    <HeavyGallery />
    <FooterInfo />
</template>  
  
<script>
import Statistics from '../components/sections/falcon9/Statistics.vue';
import HeavyBanner from '../components/sections/falconheavy/HeavyBanner.vue';  
import HeavyDescription from '../components/sections/falconheavy/HeavyDescription.vue';
import HeavyFlight from '../components/sections/falconheavy/HeavyFlight.vue';
import FalconEngines from '../components/sections/falcon9/FalconEngines.vue';
import HeavyGallery from '../components/sections/falconheavy/HeavyGallery.vue';
import FooterInfo from '../components/common/FooterInfo.vue';
import HeavyVideo from '../components/sections/falconheavy/HeavyVideo.vue';
export default {
    name: "FalconHeavy",
    components: { HeavyBanner, Statistics, HeavyDescription, HeavyFlight, FalconEngines, HeavyGallery, FooterInfo, HeavyVideo }
}  
</script>
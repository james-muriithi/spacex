<template>
    <FalconBanner />
    <Statistics />
    <FalconDescription />
    <FalconFlight />
    <FalconEngines />
    <FalconGallery />
    <FooterInfo />
</template>

<script>
import FalconBanner from '@/components/sections/falcon9/FalconBanner.vue'
import Statistics from '@/components/sections/falcon9/Statistics.vue'
import FalconDescription from '@/components/sections/falcon9/FalconDescription.vue'
import FalconFlight from '../components/sections/falcon9/FalconFlight.vue'
import FalconEngines from '../components/sections/falcon9/FalconEngines.vue'
import FalconGallery from '../components/sections/falcon9/FalconGallery.vue'
import FooterInfo from '../components/common/FooterInfo.vue'
export default {
  components: { FalconBanner, Statistics, FalconDescription, FalconFlight, FalconEngines, FalconGallery, FooterInfo, },
    name: "Falcon"
}
</script>
<template>
    <FalconBanner />
    <Statistics />
    <FalconDescription />
    <FalconFlight />
</template>

<script>
import FalconBanner from '@/components/sections/falcon9/FalconBanner.vue'
import Statistics from '@/components/sections/falcon9/Statistics.vue'
import FalconDescription from '@/components/sections/falcon9/FalconDescription.vue'
import FalconFlight from '../components/sections/falcon9/FalconFlight.vue'
export default {
  components: { FalconBanner, Statistics, FalconDescription, FalconFlight },
    name: "Falcon"
}
</script>
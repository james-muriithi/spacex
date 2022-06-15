<template>
    <FalconBanner />
    <Statistics />
    <FalconDescription />
</template>

<script>
import FalconBanner from '@/components/sections/falcon9/FalconBanner.vue'
import Statistics from '@/components/sections/falcon9/Statistics.vue'
import FalconDescription from '@/components/sections/falcon9/FalconDescription.vue'
export default {
  components: { FalconBanner, Statistics, FalconDescription },
    name: "Falcon"
}
</script>
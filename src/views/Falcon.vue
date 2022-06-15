<template>
    <FalconBanner />
    <Statistics />
</template>

<script>
import FalconBanner from '@/components/sections/falcon9/FalconBanner.vue'
import Statistics from '@/components/sections/falcon9/Statistics.vue'
export default {
  components: { FalconBanner, Statistics },
    name: "Falcon"
}
</script>
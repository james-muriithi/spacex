<template>  
    <DragonBanner />
    <Statistics />
</template>  
  
<script>
import DragonBanner from '../components/sections/dragon/DragonBanner.vue';  
import Statistics from '../components/sections/falcon9/Statistics.vue';
export default {
    name: "Dragon",
    components: { DragonBanner, Statistics }
}  
</script>
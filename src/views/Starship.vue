<template>
  <StarshipBanner />
  <FooterInfo />
</template>  
  
<script>
import StarshipBanner from "@/components/sections/starship/StarshipBanner.vue";
import FooterInfo from '../components/common/FooterInfo.vue';
export default {
  name: "Starship",
  components: {
    StarshipBanner,
    FooterInfo,
  },
};
</script>
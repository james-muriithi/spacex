<template>
  
</template>

<script>
import SectionButton from "@/components/common/SectionButton.vue";
export default {
  components: { SectionButton },
  name: "Banner",
  computed: {
    mobileBgImage: () => "/images/banner-mobile.webp",
    desktopBgImage: () => "/images/banner-desktop.webp",
  },
};
</script>
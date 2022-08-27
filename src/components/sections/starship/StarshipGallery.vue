<template>
   <PageBackground
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
  >
  </PageBackground>
</template>

<script>
import PageBackground from '../../common/PageBackground.vue';

export default {
    name: "StarshipGallery",
    components: { PageBackground },
    created() {
    this.mobileBgImage = "/images/STARSHIP_CREW_Mobile.webp";
    this.desktopBgImage = "/images/STARSHIP_CREW.webp";
  },
}
</script>
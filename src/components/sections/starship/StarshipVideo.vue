<template>
   <PageVideo
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
    title="STARSHIP UPDATE"
    subTitle="event"
  />
</template>

<script>
import PageVideo from '../../common/PageVideo.vue';

export default {
    name: "StarshipVideo",
    components: { PageVideo },
    created() {
        this.mobileBgImage = "/images/starship_video-mobile.webp";
        this.desktopBgImage = "/images/starship_video.webp";
    },
}
</script>
<template>
  <PageVideo
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
    title="CREW DRAGON INTERIOR"
    subTitle="video"
  />
</template>

<script>
import PageVideo from '../../common/PageVideo.vue';

export default {
    name: "DragonVideo",
    created() {
        this.mobileBgImage = "/images/dragon_video-mobile.webp";
        this.desktopBgImage = "/images/dragon_video.webp";
    },
    components: { PageVideo }
};
</script>
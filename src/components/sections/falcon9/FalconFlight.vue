<template>
  <PageVideo
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
    title="falcon 9 in flight"
    subTitle="video"
  />
</template>

<script>
import PageVideo from '../../common/PageVideo.vue';

export default {
    name: "FalconFlight",
    created() {
        this.mobileBgImage = "/images/f9_desktop_video.webp";
        this.desktopBgImage = "/images/f9_desktop_video.webp";
    },
    components: { PageVideo }
};
</script>
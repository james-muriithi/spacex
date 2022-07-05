<template>
  <PageVideo
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
    title="falcon heavy first flight"
    subTitle="video"
  />
</template>

<script>
import PageVideo from '../../common/PageVideo.vue';

export default {
    name: "HeavyFlight",
    created() {
        this.mobileBgImage = "/images/fh_video_mobile.webp";
        this.desktopBgImage = "/images/fh_video.webp";
    },
    components: { PageVideo }
};
</script>
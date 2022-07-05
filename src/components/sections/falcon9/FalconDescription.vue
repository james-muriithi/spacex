<template>
  <PageDescription
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
    description="Falcon 9 is a reusable, two-stage rocket designed and manufactured by
          SpaceX for the reliable and safe transport of people and payloads into
          Earth orbit and beyond. Falcon 9 is the world's first orbital class
          reusable rocket. Reusability allows SpaceX to refly the most expensive
          parts of the rocket, which in turn drives down the cost of space
          access."
  />
</template>

<script>
import PageDescription from "../../common/PageDescription.vue";
export default {
  name: "FalconDescription",
  components: { PageDescription },
  created() {
    this.mobileBgImage = "/images/f9-lines-mobile.webp";
    this.desktopBgImage = "/images/f9-lines-desktop.webp";
  },
};
</script>
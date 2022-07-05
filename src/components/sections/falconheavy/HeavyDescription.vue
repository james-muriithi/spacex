<template>
  <PageDescription
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
    description="Falcon Heavy is the most powerful operational rocket in the world by a factor
  of two. With the ability to lift into orbit nearly 64 metric tons (141,000 lb)
  Falcon Heavy can lift more than twice the payload of the next closest
  operational vehicle, the Delta IV Heavy. Falcon Heavy is composed of three
  Falcon 9 nine-engine cores whose 27 Merlin engines together generate more than
  5 million pounds of thrust at liftoff, equal to approximately eighteen 747
  aircraft."
  />
</template>

<script>
import PageDescription from "../../common/PageDescription.vue";
export default {
  name: "FalconDescription",
  components: { PageDescription },
  created() {
    this.mobileBgImage = "/images/WebsiteFHFairings_Lines_Mobile.webp";
    this.desktopBgImage = "/images/WebsiteFHFairings_Lines_Desktop.webp";
  },
};
</script>
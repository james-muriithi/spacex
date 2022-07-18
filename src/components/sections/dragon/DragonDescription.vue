<template>
  <PageDescription
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
    description="The Dragon spacecraft is capable of carrying up to 7 passengers to and from
  Earth orbit, and beyond. It is the only spacecraft currently flying that is
  capable of returning significant amounts of cargo to Earth, and is the first
  private spacecraft to take humans to the space station."
  />
</template>


<script>
import PageDescription from "../../common/PageDescription.vue";
export default {
  name: "DragonDescription",
  components: { PageDescription },
  created() {
    this.mobileBgImage = "/images/DragonTrunk_Lines_Mobile.webp";
    this.desktopBgImage = "/images/DragonTrunk_Lines_Desktop.webp";
  },
};
</script>
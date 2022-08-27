<template>
  <PageBackground
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
    class="dragon-overview relative"
  >
    <OverviewContent :content="overviewContent" title="Dragon" />
  </PageBackground>
  <FalconEnginesContent class="mb-10" />
</template>

<script>
import PageBackground from "../../common/PageBackground.vue";
import OverviewContent from "../../common/OverviewContent.vue";

export default {
  name: "DragonOverview",
  components: { PageBackground, OverviewContent },
  data() {
    return {
      mobileBgImage: "/images/DragonTrunk_Render_Mobile.webp",
      desktopBgImage: "/images/DragonTrunk_Render_Desktop.webp",
    };
  },
  computed: {
    overviewContent() {
      return [
        {
          text: "Height",
          value: ["8.1 m", "26.7 ft"],
        },
        {
          text: "Diameter",
          value: ["9.3 m³", "328 ft³"],
        },
        {
          text: "TRUNK VOLUME",
          value: ["37 m³", "1300 ft³"],
        },
        {
          text: "LAUNCH PAYLOAD MASS",
          value: ["6,000 kg ", "13,228 lbs"],
        },
        {
          text: "RETURN PAYLOAD MASS",
          value: ["3,000 kg", "6,614 lbs"],
        },
        {
          text: "Height",
          value: ["8.1 m", "26.7 ft"],
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.falcon-engines {
  @media screen and (max-width: 576px) {
    height: 60%;
  }
}
</style>
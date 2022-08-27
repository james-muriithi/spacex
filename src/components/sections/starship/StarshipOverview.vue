<template>
  <PageBackground
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
    class="dragon-overview relative"
  >
    <OverviewContent :content="overviewContent" title="Dragon" />
  </PageBackground>
</template>

<script>
import PageBackground from "../../common/PageBackground.vue";
import OverviewContent from "../../common/OverviewContent.vue";

export default {
  name: "StarshipOverview",
  components: { PageBackground, OverviewContent },
  data() {
    return {
      mobileBgImage: "/images/WebsiteStarship_Render_Mobile.webp",
      desktopBgImage: "/images/WebsiteStarship_Render_Desktop.webp",
    };
  },
  computed: {
    overviewContent() {
      return [
        {
          text: "Height",
          value: ["120 m", "394 ft"],
        },
        {
          text: "Diameter",
          value: ["9 m", "30 ft"],
        },
        {
          text: "PAYLOAD TO LEO",
          value: ["100+ t", "220+ klb"],
        },
      ];
    },
  },
};
</script>
<template>
  <PageBackground
    :desktopBgImage="desktopBgImage"
    :mobileBgImage="mobileBgImage"
    class="dragon-overview relative"
  >
    <DragonOverviewContent />
  </PageBackground>
  <FalconEnginesContent class="mb-10" />
</template>

<script>
import PageBackground from "../../common/PageBackground.vue";
import DragonOverviewContent from "./DragonOverviewContent.vue";

export default {
  name: "DragonOverview",
  components: { PageBackground, DragonOverviewContent },
  data() {
    return {
      mobileBgImage: "/images/DragonTrunk_Render_Mobile.webp",
      desktopBgImage: "/images/DragonTrunk_Render_Desktop.webp",
    };
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
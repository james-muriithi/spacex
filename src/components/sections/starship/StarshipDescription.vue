<template>
  <PageDescription
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
    description="SpaceX’s Starship spacecraft and Super Heavy rocket (collectively referred to
  as Starship) represent a fully reusable transportation system designed to
  carry both crew and cargo to Earth orbit, the Moon, Mars and beyond. Starship
  will be the world’s most powerful launch vehicle ever developed, with the
  ability to carry in excess of 100 metric tonnes to Earth orbit."
  />
</template>

<script>
import PageDescription from "../../common/PageDescription.vue";

export default {
  name: "StarshipDescription",
  components: { PageDescription },
  created() {
    this.mobileBgImage = "/images/WebsiteStarshipStack_Lines_Mobile.webp";
    this.desktopBgImage = "/images/WebsiteStarshipStack_Lines_Desktop.webp";
  },
};
</script>
<template>
  <PageSection
    :mobileBgImage="mobileBgImage"
    :desktopBgImage="desktopBgImage"
    :title="title"
    :subTitle="subTitle"
    :buttonText="buttonText"
  />
</template>  
  
<script>
export default {
  name: "StarshipBanner",
  created() {
    this.mobileBgImage = "/images/STARSHIP_SN15_Desktop.webp";
    this.desktopBgImage = "/images/STARSHIP_SN15_Mobile.webp";
    this.title = "STARSHIP SN15";
    this.subTitle = "flight test";
    this.buttonText = "rewatch"
  },
};
</script>
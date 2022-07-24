<template>
  <PageSection
    v-for="(section, index) in sections"
    :key="index"
    :mobileBgImage="section.mobileBgImage"
    :desktopBgImage="section.desktopBgImage"
    :title="section.title"
    :subTitle="section.subTitle"
    :buttonText="section.buttonText"
  />
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      sections: [
        {
          mobileBgImage: "/images/banner-mobile.webp",
          desktopBgImage: "/images/banner-desktop.webp",
          title: "CRS-25 MISSION",
          subTitle: "recent mission",
          buttonText: "rewatch",
        },
        {
          mobileBgImage: "/images/section2-mobile.webp",
          desktopBgImage: "/images/section2-desktop.webp",
          title: "TRANSPORTER-5 MISSION",
          subTitle: "recent launch",
          buttonText: "rewatch",
        },
        {
          mobileBgImage: "/images/section3-mobile.webp",
          desktopBgImage: "/images/section3-desktop.webp",
          title: "CREW-3 RETURNS TO EARTH",
          subTitle: "completed mission",
          buttonText: "rewatch",
        },
        {
          mobileBgImage: "/images/section4-mobile.webp",
          desktopBgImage: "/images/section4-desktop.webp",
          title: "STARLINK MISSION",
          subTitle: "recent launch",
          buttonText: "rewatch",
        },
        {
          mobileBgImage: "/images/section5-mobile.webp",
          desktopBgImage: "/images/section5-desktop.webp",
          title: "STARSHIP UPDATE",
          buttonText: "learn more",
        },
        {
          mobileBgImage: "/images/section6-mobile.webp",
          desktopBgImage: "/images/section6-desktop.webp",
          title: "STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON",
          buttonText: "learn more",
        },
      ],
    };
  },
};
</script>
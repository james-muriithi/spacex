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
import Banner from "@/components/sections/home/Banner.vue";
export default {
  components: { Banner },
  name: "Home",
  data() {
    return {
      sections: [
        {
          mobileBgImage: "/images/banner-mobile.webp",
          desktopBgImage: "/images/banner-desktop.webp",
          title: "NILESAT 301 MISSION",
          subTitle: "recent mission",
          buttonText: "rewatch",
        },
        {
          mobileBgImage: "/images/banner-mobile.webp",
          desktopBgImage: "/images/banner-desktop.webp",
          title: "TRANSPORTER-5 MISSION",
          subTitle: "recent launch",
          buttonText: "rewatch",
        },
        {
          mobileBgImage: "/images/banner-mobile.webp",
          desktopBgImage: "/images/banner-desktop.webp",
          title: "CREW-3 RETURNS TO EARTH",
          subTitle: "completed mission",
          buttonText: "rewatch",
        },
        {
          mobileBgImage: "/images/banner-mobile.webp",
          desktopBgImage: "/images/banner-desktop.webp",
          title: "STARLINK MISSION",
          subTitle: "recent launch",
          buttonText: "rewatch",
        },
        {
          mobileBgImage: "/images/banner-mobile.webp",
          desktopBgImage: "/images/banner-desktop.webp",
          title: "STARSHIP UPDATE",
          buttonText: "learn more",
        },
      ],
    };
  },
};
</script>
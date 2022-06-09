<template>
  <footer class="bg-dark py-8 px-1 md:px-8">
    <div class="cotainer">
      <div class="flex justify-center flex-wrap text-xs md:text-sm">
        <div class="copyright mr-6 lg:mr-10 mb-5 sm:mb-0">
          <p class="text-gray-400">SPACEX © {{ year }}</p>
        </div>
        <div class="flex text-white flex-wrap uppercase justify-center">
          <div
            v-for="({ title, url }, index) in footerLinks"
            :key="index"
            class="px-2 md:px-3 mb-4"
          >
            <router-link :to="url">
              {{ title }}
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    year() {
      return new Date().getFullYear();
    },
    footerLinks() {
      return [
        {
          title: "twitter",
          url: "",
        },
        {
          title: "youtube",
          url: "",
        },
        {
          title: "instagram",
          url: "",
        },
        {
          title: "flickr",
          url: "",
        },
        {
          title: "linkedin",
          url: "",
        },
        {
          title: "privacy policy",
          url: "",
        },
        {
          title: "suppliers",
          url: "",
        },
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  -webkit-transition: color 1s cubic-bezier(0.25, 1, 0.25, 1),
    background-color 1s cubic-bezier(0.25, 1, 0.25, 1);
  transition: color 1s cubic-bezier(0.25, 1, 0.25, 1),
    background-color 1s cubic-bezier(0.25, 1, 0.25, 1);
  &:hover {
    @apply text-gray-400;
  }
}
</style>
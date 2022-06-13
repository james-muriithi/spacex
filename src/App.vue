<template>
  <Navbar @toggleSidebar="sidebarOpen = !sidebarOpen" />
  <Sidebar
    :sidebarOpen="sidebarOpen"
    @toggleSidebar="sidebarOpen = !sidebarOpen"
  />
  <router-view />
  <PageFooter />
</template>

<script>
import Navbar from "@/components/UI/Navbar.vue";
import PageFooter from "./components/UI/PageFooter.vue";
import Sidebar from "./components/UI/Sidebar.vue";

export default {
  name: "App",
  components: { Navbar, PageFooter, Sidebar },
  data: () => ({
    sidebarOpen: false,
  }),
};
</script>

<style lang="scss">
a.hover-dim {
  -webkit-transition: color 1s cubic-bezier(0.25, 1, 0.25, 1),
    background-color 1s cubic-bezier(0.25, 1, 0.25, 1);
  transition: color 1s cubic-bezier(0.25, 1, 0.25, 1),
    background-color 1s cubic-bezier(0.25, 1, 0.25, 1);
  &:hover {
    @apply text-gray-400;
  }
}
</style>
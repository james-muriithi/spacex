<template>
  <Navbar />
  <router-view></router-view>
</template>

<script>
import Navbar from "@/components/UI/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
};
</script>
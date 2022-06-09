<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<script>
import Navbar from "@/components/UI/Navbar.vue";
import Footer from "./components/UI/Footer.vue";
export default {
  name: "App",
  components: { Navbar, Footer },
};
</script>
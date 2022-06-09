<template>
  <div class="mt-10">
    <router-link to="" class="border-white border-2 px-14 py-4 relative">
      <div class="absolute hover top-0 left-0 w-full h-full"></div>
      <span class="relative z-10 uppercase">Rewatch</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SectionButton",
};
</script>

<style lang="scss" scoped>
a {
  -webkit-transition: color 1s cubic-bezier(0.25, 1, 0.25, 1),
    background-color 1s cubic-bezier(0.25, 1, 0.25, 1);
  transition: color 1s cubic-bezier(0.25, 1, 0.25, 1),
    background-color 1s cubic-bezier(0.25, 1, 0.25, 1);
  .hover {
    @apply bg-white;
    -webkit-transform-origin: top center;
    transform-origin: top center;
    -webkit-transform: scale3d(1, 0, 1);
    transform: scale3d(1, 0, 1);
    -webkit-transition: -webkit-transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    transition: -webkit-transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1),
      -webkit-transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
  }
  &:focus,
  &:hover {
    @apply text-dark;
    .hover {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
      -webkit-transform-origin: bottom center;
      transform-origin: bottom center;
    }
  }
}
</style>
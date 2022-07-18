<template>
  <div class="absolute bottom-4 w-full text-white hidden md:block">
    <div class="text-center scroll-down-arrow">
      <span class="material-icons text-5xl cursor-pointer">
        keyboard_arrow_down
      </span>
    </div>
  </div>
</template>  
  
<script>
export default {
  name: "PageScrollDown",
};
</script>

<style lang="scss" scoped>
.scroll-down-arrow {
  opacity: 0;
  visibility: inherit;
  animation: scrolldown 3s infinite;
}
@keyframes scrolldown {
  0% {
    opacity: 0;
    transform: translate3d(0px, -20px, 0px);
  }

  100% {
    opacity: 1;
    transform: translate3d(0px, -10px, 0px);
  }
}
</style>
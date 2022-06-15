<template>
  <div class="bg-dark container mx-auto py-10 lg:py-20 text-white">
    <div class="grid grid-cols-3 gap-5 sm:gap-4">
      <div class="text-center">
        <span>
          <h2 class="text-5xl sm:text-7xl lg:text-9xl mb-3">
            <ICountUp
              :startVal="0"
              :endVal="152"
              :decimals="0"
              :duration="3"
              :options="{}"
            />
          </h2>
          <h4 class="text-xs sm:text-xl uppercase">total launches</h4>
        </span>
      </div>
      <div class="text-center">
        <span>
          <h2 class="text-5xl sm:text-7xl lg:text-9xl mb-3">
            <ICountUp
              :startVal="0"
              :endVal="116"
              :decimals="0"
              :duration="3"
              :options="{}"
            />
          </h2>
          <h4 class="text-xs sm:text-xl uppercase">total landings</h4>
        </span>
      </div>
      <div class="text-center">
        <span>
          <h2 class="text-5xl sm:text-7xl lg:text-9xl mb-3">
            <ICountUp
              :startVal="0"
              :endVal="95"
              :decimals="0"
              :duration="3"
              :options="{}"
            />
          </h2>
          <h4 class="text-xs sm:text-xl uppercase">total reflights</h4>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import ICountUp from "vue-countup-v3";

export default {
  name: "Statistics",
  components: { ICountUp },
};
</script>
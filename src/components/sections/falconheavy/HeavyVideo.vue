<template>
  <div class="h-full relative section bg-dark px-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 sm:gap-7 md:gap-14 lg:grid-cols-2 lg:gap-24">
      <div class="">
        <picture class="h-full block lg:hidden w-full">
          <source
            srcset="
              https://www.spacex.com/static/images/content/fh_performance.webp
            "
            type="image/webp"
          />
          <source
            srcset="
              https://www.spacex.com/static/images/content/fh_performance.jpg
            "
            type="image/jpeg"
          />
          <img
            src="https://www.spacex.com/static/images/content/fh_performance.jpg"
            alt=""
          />
        </picture>
        <video
          class="hidden lg:block w-full h-full"
          autoplay=""
          loop=""
          muted=""
          preload="auto"
          autobuffer="true"
        >
          <source type="video/webm" src="/videos/fh_performance.webm" />
        </video>
      </div>
      <div class="flex mt-14 lg:mt-0">
        <div class="text-white sm:pr-7 md:pr-20 lg:pr-32 my-auto">
          <h5 class="uppercase text-3xl lg:text-5xl font-bold">unmatched perfomance</h5>
          <p class="text-gray-300 mt-5">
            With more than 5 million pounds of thrust at liftoff, Falcon Heavy
            is the most capable rocket flying. By comparison, the liftoff thrust
            of the Falcon Heavy equals approximately eighteen 747 aircraft at
            full power. Falcon Heavy can lift the equivalent of a fully loaded
            737 jetliner—complete with passengers, luggage and fuel—to orbit.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeavyVideo",
  created() {
    this.mobileBgImage = "/images/WebsiteFHFairings_Lines_Mobile.webp";
    this.desktopBgImage = "/images/WebsiteFHFairings_Lines_Desktop.webp";
  },
};
</script>
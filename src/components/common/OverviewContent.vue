<template>
  <div
    class="flex items-center sm:h-full text-white px-8 md:px-14 page-content"
  >
    <div class="grid sm:grid-cols-5 w-full gap-8">
      <div class="col-span-2">
        <div>
          <h4 class="uppercase md:text-xl font-normal mb-2" v-if="title">
            {{ title }}
          </h4>
          <h2 class="text-3xl lg:text-5xl font-bold uppercase">
            {{ subTitle }}
          </h2>
        </div>

        <div class="mt-10 tabs">
          <div class="content mt-6">
            <div class="mt-10 uppercase font-semibold text-sm">
              <div
                v-for="({ text, value }, index) in content"
                :key="index"
                class="py-4 border-b border-gray-400 flex justify-between"
              >
                <span class="text-white">{{ text }}</span>
                <span>
                  <span class="text-white"> {{ value[0] }} </span>
                  <span class="text-gray-300"> / {{ value[1] }} </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OverviewContent",
  props: {
    title: {
      type: String,
      required: false,
    },
    subTitle: {
      type: String,
      default: "overview",
    },
    content: {
      type: Array,
      required: true,
    },
  },
};
</script>
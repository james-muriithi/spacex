<template>
  <div class="bg-dark py-16">
    <div class="flex justify-center h-28 mb-6">
      <span class="border-r"></span>
    </div>
    <div class="text-center mb-6">
      <span class="text-gray-400 text-sm">
        For information about our launch services, contact
        <a
          target="_blank"
          class="text-white"
          href="mailto:sales@spacex.com"
        >
          sales@spacex.com
        </a>
      </span>
    </div>
    <div class="flex justify-center flex-wrap">
      <SectionButton class="md:mr-6 text-white px-4 lg:px-4">
        Download users guide
      </SectionButton>

      <SectionButton class="text-white px-4 lg:px-4">
        capabilities and services
      </SectionButton>
    </div>
  </div>
</template>

<script>
import SectionButton from "../../common/SectionButton.vue";
export default {
  components: { SectionButton },
  name: "FalconInfo",
};
</script>
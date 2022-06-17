<template>
  <div class="bg-dark py-16">
    <div class="flex justify-center h-28 mb-6">
      <span class="border-r"></span>
    </div>
    <div class="text-center mb-6">
      <span class="text-gray-400 text-sm">
        For information about our launch services, contact
        <router-link target="_blank" class="text-white" to="mailto:sales@spacex.com">
          sales@spacex.com
        </router-link>
      </span>
    </div>
    <div class="flex justify-center">
        <section-button class="mr-6 text-white px-4">
            Download users guide
        </section-button>

        <section-button class="text-white px-4">
            capabilities and services
        </section-button>
    </div>
  </div>
</template>

<script>
import SectionButton from '../../common/SectionButton.vue';
export default {
  components: { SectionButton },
  name: "FalconInfo",
};
</script>
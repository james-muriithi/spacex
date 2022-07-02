<template>
  <div class="bg-dark py-16 px-6">
    <div class="flex justify-center h-28 mb-6">
      <span class="border-r"></span>
    </div>
    <div class="text-center mb-6">
      <span class="text-gray-400 text-sm">
        {{ saleText }}
        <slot name="cotactLink">
          <a target="_blank" class="text-white" href="mailto:sales@spacex.com">
            sales@spacex.com
          </a>
        </slot>
      </span>
    </div>
    <div class="flex justify-center flex-wrap">
      <slot>
        <SectionButton class="md:mr-6 text-white px-4 lg:px-4">
          Download users guide
        </SectionButton>

        <SectionButton class="text-white px-4 lg:px-4">
          capabilities and services
        </SectionButton>
      </slot>
    </div>
  </div>
</template>

<script>
import SectionButton from "./SectionButton.vue";
export default {
  components: { SectionButton },
  name: "FooterInfo",
  props: {
    saleText: {
      type: String,
      default: "For information about our launch services, contact",
    },
  },
};
</script>
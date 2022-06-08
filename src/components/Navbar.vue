<template>
  <nav class="bg-dark px-2 sm:px-4 py-8">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <router-link :to="{ name: 'home' }" class="flex items-center">
        <img src="@/assets/logo.svg" class="h-6 sm:h-6" alt="Spacex Logo" />
      </router-link>
      <div class="flex items-center md:order-2">
        <router-link to="#" class="text-white uppercase md:text-sm md:font-medium">shop</router-link>
        <button
          data-collapse-toggle="mobile-menu-2"
          type="button"
          class="
            inline-flex
            items-center
            p-2
            ml-1
            text-sm text-white
            hover:text-gray-100
          "
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            class="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="
          hidden
          justify-between
          items-center
          w-full
          md:flex md:w-auto md:order-1
        "
        id="mobile-menu-2"
      >
        <ul
          class="
            flex flex-col
            md:flex-row md:text-sm md:space-x-4 md:font-medium
            uppercase items-center
          "
        >
          <li v-for="({ title, routeName }, index) in navbarItems" :key="index">
            <router-link
              :to="{ name: routeName }"
              class="block pr-1 text-white"
              aria-current="page"
            >
              {{ title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      navbarItems: [
        {
          title: "falcon 9",
          routeName: "home",
        },
        {
          title: "falcon heavy",
          routeName: "home",
        },
        {
          title: "dragon",
          routeName: "home",
        },
        {
          title: "starship",
          routeName: "home",
        },
        {
          title: "human spaceflight",
          routeName: "home",
        },
        {
          title: "rideshare",
          routeName: "home",
        },
        {
          title: "starlink",
          routeName: "home",
        },
      ],
    };
  },
};
</script>
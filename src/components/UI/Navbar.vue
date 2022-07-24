<template>
  <nav
    class="
      px-2
      sm:px-4
      py-4
      md:py-6
      absolute
      w-full
      z-10
      text-sm
      lg:text-xs
      xl:text-sm
      transition
    "
    :class="{ 'lg:fixed': !hideNavOnDesktop }"
    ref="navbar"
  >
    <div class="flex lg:justify-between items-center md:mx-6">
      <router-link
        :to="{ name: 'home' }"
        class="flex items-center mx-auto lg:ml-0 lg:mr-0"
      >
        <img src="@/assets/logo.svg" class="h-5 sm:h-6" alt="Spacex Logo" />
      </router-link>
      <div class="flex items-center md:order-2">
        <router-link
          :to="{ name: navbarItems[navbarItems.length - 1]['routeName'] }"
          class="text-white uppercase font-medium lg:block hidden nav-link"
        >
          <span>{{ navbarItems[navbarItems.length - 1]["title"] }}</span>
        </router-link>
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
          @click="$emit('toggleSidebar')"
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
          lg:flex
          md:w-auto md:order-1
        "
        id="mobile-menu-2"
      >
        <ul
          class="
            flex flex-row
            space-x-3
            lg:space-x-5
            font-medium
            uppercase
            items-center
          "
        >
          <li
            v-for="({ title, routeName, external }, index) in navbarItems.slice(
              0,
              -1
            )"
            :key="index"
          >
            <a
              v-if="external"
              :href="routeName"
              target="_blank"
              class="block pr-1 text-white nav-link font-semibold"
            >
            <span>{{ title }}</span>
            </a>
            <router-link
              v-else
              :to="{ name: routeName }"
              class="block pr-1 text-white nav-link font-semibold"
              aria-current="page"
            >
              <span>{{ title }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { menuItems } from "@/utils/menuItems";

export default {
  name: "Navbar",
  emits: ["toggleSidebar"],
  props: {
    hideNavOnDesktop: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      lastScrollPos: 0,
    };
  },
  computed: {
    navbarItems: () => menuItems,
  },
  methods: {
    onScroll() {
      const hideNavHeight = window.innerHeight / 4.5;

      if (window.scrollY < hideNavHeight) {
        this.fixedNavbar();
        return;
      }

      this.unFixNavbar();
      // if scroll up
      if (window.scrollY < this.lastScrollPos) {
        this.fixedNavbar(true);
      }
      // set last scroll pos
      this.lastScrollPos = window.scrollY <= 0 ? 0 : window.scrollY;
    },
    fixedNavbar(addBg = false) {
      this.$refs.navbar.classList.remove("absolute", "bg-dark");
      this.$refs.navbar.classList.add("fixed");
      if (addBg) this.$refs.navbar.classList.add("bg-dark");
    },
    unFixNavbar() {
      this.$refs.navbar.classList.remove("fixed", "bg-dark");
      this.$refs.navbar.classList.add("absolute");
    },
  },
  created() {
    window.addEventListener("scroll", this.onScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss" scoped>
.nav-link {
  span {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: -3px;
      left: 0;
      width: 100%;
      height: 1px;
      @apply bg-white;
      transform: scaleX(0);
      transform-origin: right center;
      transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
    }
  }
  &:hover {
    @apply text-white border-white;
    span::after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
}
</style>
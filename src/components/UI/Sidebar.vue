<template>
  <div
    class="menu-close absolute top-0 left-0 h-full w-full z-40"
    v-if="sidebarOpen"
    @click="$emit('toggleSidebar')"
  ></div>
  <transition name="slide-in-right">
    <aside
      class="
        bg-dark
        transition-all
        fixed
        top-0
        right-0
        h-full
        w-68
        sm:w-70
        z-50
        py-6
        px-5
        md:py-12 md:px-9
        text-white
      "
      v-if="sidebarOpen"
    >
      <div>
        <div
          class="
            flex
            justify-between
            items-center
            mb-3
            md:mb-0
            sm:block sm:text-right
          "
        >
          <router-link :to="{ name: 'home' }" class="block sm:hidden">
            <img src="@/assets/logo.svg" class="h-5" alt="Spacex Logo" />
          </router-link>
          <button class="material-icons" @click="$emit('toggleSidebar')">
            close
          </button>
        </div>

        <div class="uppercase text-sm">
          <template class="block lg:hidden">
            <router-link
              v-for="({ title, routeName, external }, index) in navbarItems"
              :key="index"
              :to="external ? routeName : { name: routeName }"
              class="
                block
                border-b border-gray-700
                py-3
                md:py-2
                text-right
                hover-dim
              "
              :style="{ animationDelay: `${calculateDelay(index + 1 / 2)}` }"
            >
              {{ title }}
            </router-link>
          </template>
          <router-link
            v-for="({ title, routeName, external }, index) in sidebarItems"
            :key="index"
            :to="external ? routeName : { name: routeName }"
            class="block border-b border-gray-700 py-2 text-right hover-dim"
            :style="{
              animationDelay: calculateDelay(
                navbarVisible
                  ? index + 1 / 2
                  : navbarItems.length + index + 1 / 2
              ),
            }"
          >
            {{ title }}
          </router-link>
        </div>
      </div>
    </aside>
  </transition>
</template>

<script>
import { menuItems } from "@/utils/menuItems";

export default {
  name: "Sidebar",
  emits: ["toggleSidebar"],
  props: {
    sidebarOpen: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    sidebarOpen(open) {
      if (open) {
        document.getElementById("app").classList.add("overflow-y-hidden");
      } else {
        document.getElementById("app").classList.remove("overflow-y-hidden");
      }
    },
  },
  computed: {
    navbarVisible() {
      return window.innerWidth > 1024;
    },
    navbarItems: () => menuItems.slice(0, -1),
    sidebarItems: () => [
      {
        title: "mission",
        routeName: "home",
      },
      {
        title: "launches",
        routeName: "home",
      },
      {
        title: "careers",
        routeName: "home",
      },
      {
        title: "updates",
        routeName: "home",
      },
      ...menuItems.slice(-1),
    ],
  },
  methods: {
    calculateDelay(seconds) {
      return `${seconds / 10}s`;
    },
  },
};
</script>

<style lang="scss" scoped>
.w-68 {
  width: 310px;
}
.sm\:w-70 {
  @media screen and (min-width: 576px) {
    width: 350px;
  }
}
.menu-close {
  background: rgba(0, 0, 0, 0.5);
}

.hover-dim {
  animation: FadeIn 1s linear;
  animation-fill-mode: both;
  transform: matrix(1, 0, 0, 1, 0, 0);
  opacity: 0;
}

.slide-in-right-enter-active,
.slide-in-right-leave-active {
  transition: all 0.5s;
  transform: translateX(0);
}
.slide-in-right-enter-from,
.slide-in-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

@keyframes FadeIn {
  0% {
    opacity: 0;
    transform: translate3d(0px, 7px, 0px);
  }
  100% {
    opacity: 1;
    transform: translate3d(0px, 5px, 0px);
  }
}
</style>
<template>
  <div
    class="flex items-center sm:h-full text-white px-8 md:px-14 page-content"
  >
    <div class="grid sm:grid-cols-3">
      <div class="">
        <div>
          <h4 class="uppercase md:text-xl font-normal mb-2">Engines</h4>
          <h2 class="text-3xl lg:text-5xl font-bold uppercase">Merlin</h2>
        </div>

        <div class="mt-10 tabs">
          <div class="flex header uppercase font-bold">
            <div
              class="pr-4 border-r border-gray-400 cursor-pointer"
              :class="{ 'text-gray-400': tab !== 'sea-level' }"
              @click="tab = 'sea-level'"
            >
              sea level
            </div>
            <div
              class="pl-4 cursor-pointer"
              :class="{ 'text-gray-400': tab !== 'vacuum' }"
              @click="tab = 'vacuum'"
            >
              vacuum
            </div>
          </div>
          <div class="content mt-6">
            <div v-if="tab === 'sea-level'">
              <p class="text-base font-light text-gray-200">
                Merlin is a family of rocket engines developed by SpaceX for use
                on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles.
                Merlin engines use a rocket grade kerosene (RP-1) and liquid
                oxygen as rocket propellants in a gas-generator power cycle. The
                Merlin engine was originally designed for recovery and reuse.
              </p>
              <div class="mt-10 uppercase font-semibold text-sm">
                <div class="py-4 border-b border-gray-400 flex justify-between">
                  <span class="text-white">Propellant</span>
                  <span>
                    <span class="text-white"> LOX </span>
                    <span class="text-gray-300"> / RP-1 </span>
                  </span>
                </div>
                <div class="py-4 border-b border-gray-400 flex justify-between">
                  <span class="text-white">thrust</span>
                  <span>
                    <span class="text-white"> 845 kN </span>
                    <span class="text-gray-300"> / 190,000 lbf </span>
                  </span>
                </div>
              </div>
            </div>

            <div v-if="tab === 'vacuum'">
              <p class="text-base font-light text-gray-200">
                Merlin Vacuum features a larger exhaust section and a
                significantly larger expansion nozzle to maximize the engine’s
                efficiency in the vacuum of space. Its combustion chamber is
                regeneratively cooled, while the expansion nozzle is radiatively
                cooled. At full power, the Merlin Vacuum engine operates with
                the greatest efficiency ever for an American-made hydrocarbon
                rocket engine.
              </p>
              <div class="mt-10 uppercase font-semibold text-sm">
                <div class="py-4 border-b border-gray-400 flex justify-between">
                  <span class="text-white">Propellant</span>
                  <span>
                    <span class="text-white"> LOX </span>
                    <span class="text-gray-300"> / RP-1 </span>
                  </span>
                </div>
                <div class="py-4 border-b border-gray-400 flex justify-between">
                  <span class="text-white">thrust</span>
                  <span>
                    <span class="text-white"> 981 kN </span>
                    <span class="text-gray-300"> / 220,500 lbf </span>
                  </span>
                </div>
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
  name: "FalconEnginesContent",
  data() {
    return {
      tab: "sea-level",
    };
  },
};
</script>
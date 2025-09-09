<script setup lang="ts">
import { useAsideStore } from '~/stores/website';
const store = useAsideStore()


// prevents ghost clicks/clicks being detected multiple times in a row
const throttle = useThrottleFn(() => { store.toggle() }, 250)
function saveClick() {
  throttle()
}

// list of stuff sold - drinks, confectionaries, desserts, extras etc -, child of 'Menu' element from array above
const itemsList = []
</script>
<template>
  <!-- mobile/tablet -->
  <nav class="flex fixed z-10 bottom-0 w-10/12 m-[0_auto] justify-around items-center min-h-[60px] rounded-xl">
    <ul class="--menu-left flex-1 shadow-[0px_0px_10px_1px_var(--color-beige)]"></ul>
    <NuxtImg src="/maplecorner_logo.webp" class="rounded-full  shadow-[0px_0px_10px_1px_var(--color-beige)]" />
    <ul class="--menu-right flex-1">
      <BaseButton @click="saveClick" class="bg-espresso rounded-md text-beige">
        <Icon name="lucide:menu" size="25" />
      </BaseButton>
    </ul>
  </nav>

</template>

<style scoped>
.--menu-left>*, .--menu-right>* {
  box-shadow: 0px 0px 10px 1px var(--color-beige);
}
</style>

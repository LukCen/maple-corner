<script setup lang="ts">
import { useAsideStore } from '~/stores/website';
const store = useAsideStore()


// prevents ghost clicks/clicks being detected multiple times in a row
const throttle = useThrottleFn(() => { store.toggle() }, 250)
function saveClick() {
  throttle()
}

// list of stuff sold - drinks, confectionaries, desserts, extras etc -, child of 'Menu' element from array above
const desktopMenuItems = [
  { id: 1, title: 'Item 1', icon: 'lucide:dice-1' },
  { id: 2, title: 'Item 2', icon: 'lucide:dice-2' },
  { id: 3, title: 'Item 3', icon: 'lucide:dice-3' },
  { id: 4, title: 'Item 4', icon: 'lucide:dice-4' },
]
</script>
<template>
  <!-- mobile/tablet -->
  <nav class="flex desktop:hidden fixed z-10 bottom-0 gap-4 w-11/12 m-[0_auto] justify-around items-center min-h-[60px] rounded-xl">
    <ul class="--menu-left flex gap-1 flex-1">
      <BaseButton class="bg-espresso rounded-md text-beige">Item</BaseButton>
      <BaseButton class="bg-espresso rounded-md text-beige">Item</BaseButton>
    </ul>

    <NuxtImg width="50" height="50" src="/maplecorner_logo.webp" class="rounded-full shadow-[0px_0px_10px_1px_var(--color-beige)]" />

    <ul class="--menu-right flex gap-1 flex-1">
      <BaseButton class="bg-espresso rounded-md text-beige">Item</BaseButton>
      <BaseButton aria-label="Open Menu" @click="saveClick" class="bg-espresso rounded-md text-beige">
        <Icon name="lucide:menu" size="25" />
      </BaseButton>
    </ul>
  </nav>

  <!-- desktop -->
  <nav class="hidden desktop:flex z-10 gap-4 w-full items-center min-h-[60px] rounded-xl bg-espresso/95 text-beige px-2 py-1 shadow-[0px_0px_5px_1px_var(--color-beige)]">
    <div class="logo_text flex gap-2 items-center">
      <NuxtImg src="/maplecorner_logo.webp" class="rounded-full" />
      <span class="--nav-header text-5xl font-bold">Maple Corner</span>
    </div>
    <ul class="flex gap-1 flex-1 justify-around items-center">
      <li v-for="item in desktopMenuItems" :key="item.id" class="flex items-center justify-center">
        <Icon :name="item.icon" size="45" />
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </nav>



</template>

<style scoped>
.--nav-header {
  font-family: "Story Script", sans-serif;
}
.--menu-left>*, .--menu-right>* {
  box-shadow: 0px 0px 10px 1px var(--color-beige);
  flex-basis: 50%;
}
ul>button {
  display: flex;
}
</style>

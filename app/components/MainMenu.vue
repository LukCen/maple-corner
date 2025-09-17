<script setup lang="ts">
import { useAsideStore } from '~/stores/website';
import { menuList } from '~/data/MenuEntries';
const store = useAsideStore()


// prevents ghost clicks/clicks being detected multiple times in a row
const throttle = useThrottleFn(() => { store.toggle() }, 250)
function saveClick() {
  throttle()
}

</script>
<template>
  <!-- mobile/tablet -->
  <!-- <nav class="flex desktop:hidden fixed z-10 bottom-0 gap-4 w-11/12 m-[0_auto] justify-around items-center min-h-[60px] rounded-xl">
    <ul class="--menu-left flex gap-1 w-full flex-2">
      <NuxtLink class="bg-espresso rounded-md w-full text-beige" to="/menu">Menu</NuxtLink>
    </ul>

    <NuxtImg width="50" height="50" src="/maplecorner_logo.webp" class="rounded-full flex-1 shadow-[0px_0px_10px_1px_var(--color-beige)]" />

    <ul class="--menu-right flex gap-1 flex-2">
      <BaseButton class="bg-espresso rounded-md text-beige">Item</BaseButton>
      <BaseButton aria-label="Open Menu" @click="saveClick" class="bg-espresso rounded-md text-beige">
        <Icon name="lucide:menu" size="25" />
      </BaseButton>
    </ul>
  </nav> -->

  <nav class="grid grid-cols-[5fr_2fr_5fr] desktop:hidden fixed z-10 bottom-0 gap-4 w-11/12 m-[0_auto] justify-around items-center min-h-[60px] rounded-xl">
    <ul class="--menu-left">
      <NuxtLink class="bg-espresso rounded-md min-w-full text-beige btn-base" to="/menu">Menu</NuxtLink>
    </ul>
    <NuxtImg width="50" height="50" src="/maplecorner_logo.webp" class="rounded-full flex-1 shadow-[0px_0px_10px_1px_var(--color-beige)]" />

    <ul class="--menu-right">
      <BaseButton class="bg-espresso rounded-md text-beige">Item</BaseButton>
      <BaseButton aria-label="Open Menu" @click="saveClick" class="bg-espresso rounded-md text-beige">
        <Icon v-if="store.isActive === false" name="lucide:menu" size="25" />
        <Icon v-if="store.isActive === true" name="lucide:x" size="25" />
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
      <li v-for="item in menuList" :key="item.id" class="flex items-center justify-center">
        <NuxtLink class="flex gap-2 items-center" :to="item.url">
          <Icon :name="item.icon" size="40" />
          <span>{{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>



</template>

<style scoped>
.--nav-header {
  font-family: "Story Script", sans-serif;
}
.--menu-left, .--menu-right {
  box-shadow: 0px 0px 10px 1px var(--color-beige);
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  gap: 5px;
}
ul>button {
  display: flex;
}
</style>

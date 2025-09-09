<script setup lang="ts">
const menuList = [
  {
    id: 1,
    title: 'Home',
    url: '/',
    icon: 'lucide:house'
  },
  {
    id: 2,
    title: 'Menu',
    url: '/menu',
    icon: 'lucide:book-open'
  },
  {
    id: 3,
    title: 'About us',
    url: '/aboutus',
    icon: 'lucide:info'
  }
]
// list of stuff sold - drinks, confectionaries, desserts, extras etc -, child of 'Menu' element from array above
const itemsList = []
</script>
<template>
  <!-- mobile/tablet -->
  <nav
    class="flex relative bottom-0 w-full justify-around items-center bg-espresso/90 text-beige min-h-[80px] rounded-xl shadow-[0px_0px_10px_1px_var(--color-beige)]">
    <NuxtLink v-for="item in menuList" :to="item.url"
      class="flex gap-1 items-center px-4 py-2 h-fit rounded-md bg-espresso/95 shadow-[0px_0px_1px_1px_var(--color-beige)] hover:bg-beige hover:text-espresso/95 duration-150">
      <Icon :name="item.icon" class="text-inherit duration-150" size="24" />
      <span class="font-semibold">{{ item.title }}</span>
    </NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { menuList } from '~/data/MenuEntries';
import { useAsideStore } from '~/stores/website';
const store = useAsideStore()

</script>

<!-- off-\screen menu that slides into view on mobile - non-rendering on desktop and wide screens -->
<template>
  <aside v-if="store.isActive === true" class=" flex flex-col h-[calc(100vh-80px)] scale-100 duration-500 px-4 py-1 gap-2 top-0 left-0 w-screen absolute
    bg-espresso/95 text-beige">
    <h2 class="font-bold">Menu</h2>
    <hr class="bg-beige" />
    <ul class="flex flex-col gap-8">
      <li v-for="item in menuList">
        <NuxtLink :to="item.url"
          class="flex gap-2 items-center h-fit bg-espresso/95 hover:text-espresso/95 duration-150">
          <Icon :name="item.icon" class="text-inherit duration-150" size="24" />
          <span class="font-semibold">{{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>
<!-- v-if="store.isActive === true" -->

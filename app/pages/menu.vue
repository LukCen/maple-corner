<script setup lang="ts">
import { createClient } from '@supabase/supabase-js'
import type { Tables } from '~/types/supabase'

const config = useRuntimeConfig()

type Product = Tables<'products'>

const data = ref<Product[]>([])
// takes out only the values inside the 'type' column and 
const filterCats = computed(() => {
  // Extract unique, non-null types
  const uniqueTypes = [...new Set(
    data.value
      .map(product => product.type)
      .filter((type): type is string => type !== null && type !== undefined)
  )]

  return uniqueTypes
})

const server = createClient(config.public.url, config.public.key)
// literally why is this hook here this doesn't have to wait for shit
onMounted(async () => {
  let { data: products, error } = await server.from('products').select('*')
  if (products) {
    data.value = products
  }
})

// lol
function capitalize(t: string): string {
  if (!t) return t
  return t.charAt(0).toUpperCase() + t.slice(1)
}

</script>
<template>
  <main>
    <form class="filters">
      <ul class="flex h-fit w-full flex-col gap-4">
        <li class="bg-beige rounded-md flex gap-2" v-for="item in filterCats" :key="item">
          <input :key="item" type="checkbox" :id="'filter' + item" :name="item ?? 'empty'"><label :for="'filter' + item">{{ capitalize(item ?? 'Incorrect value') }}</label>
        </li>
      </ul>
      <button></button>
    </form>
    <div class="content">
      <ul class="product_list flex flex-wrap">
        <li class="flex flex-col items-center gap-4 max-w-1/2 basis-1/2 max-h-fit flex-1" v-for="item in data">
          <NuxtImg :src="item.img ?? '/product_card_placeholder.jpg'" width="300" height="300" />
          <div class="flex flex-col max-w-fit justify-center gap-2 w-2/3">
            <h3>{{ item.name }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </li>
      </ul>

    </div>
  </main>
</template>

<style scoped>
.filters, .content {
  display: grid;
  border: 2px solid lightblue;
}

main {
  display: grid;
  grid-template-columns: 2fr 10fr;
}
</style>

<script setup lang="ts">
import { createClient } from '@supabase/supabase-js'
import type { Tables } from '~/types/supabase'

const config = useRuntimeConfig()

type Product = Tables<'products'>
// i am such a good programmer
const data = ref<Product[]>([])

// takes out only the values inside the 'type' column and 
const filterCats = computed(() => {
  // Extract unique, non-null types
  const uniqueTypes = [...new Set(
    data.value
      .map(product => product.type)
      .filter((type): type is string => type !== null && type !== undefined)
  )]

  console.log('Unique categories computed:', uniqueTypes)
  return uniqueTypes
})
// const serverTestRun = async () => {
//   // I FUCKING HATE THIS LANGUAGE SOMETIMES
//   data.value = await serverStart<Product>(config.public.url, config.public.key, 'products', '*') ?? []
// }
const server = createClient(config.public.url, config.public.key)
// literally why is this hook here this doesn't have to wait for shit
onMounted(async () => {
  // console.log(data.value)
  // serverTestRun()
  let { data: products, error } = await server.from('products').select('*')
  // data.value = products
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
    </form>
    <div class="content"></div>
  </main>
</template>

<style scoped>
.filters, .content {
  display: grid;
  border: 2px solid lightblue;
}

.filters {
  grid-template-columns: 2fr 10fr;
}
</style>

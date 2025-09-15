<script setup lang="ts">
import { serverStart } from '~/data/dbtest';
const config = useRuntimeConfig()
const serverTestRun = async () => {
  const data = await serverStart(config.public.url, config.public.key, 'products', '*')
  console.log(data.data)
}
onMounted(() => {
  serverTestRun()
})
</script>
<template>
  <Landing />
</template>

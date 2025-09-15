<!-- A regular 'simple' product card -->
<!-- placeholder data now, will be populated with stuff from database once i'm done with that -->
<script setup lang="ts">
const props = defineProps({
  imgUrl: {
    type: String,
    default: '/maplecorner_product_placeholder.jpg'
  },
  title: {
    type: String,
    default: 'Product Card Title'
  },
  desc: {
    type: String,
    default: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati eaque nulla mollitia eligendi recusandae dignissimos porro quia. Nisi, at illum, odio minima provident sequi, consequuntur fugit alias veritatis distinctio ullam error magnam velit quo optio eaque sunt voluptates culpa praesentium?'
  },
  linkTo: {
    type: String,
    default: '/'
  }
})
</script>

<template>
  <article class="flex flex-col rounded-sm overflow-hidden">
    <NuxtImg :src="props.imgUrl" />
    <div class="text flex flex-col bg-dark p-4 gap-8">
      <div class="text_info flex flex-col gap-4">
        <h3>{{ props.title }}</h3>
        <p>{{ props.desc }}</p>
      </div>
      <NuxtLink :to="props.linkTo" class="flex gap-2 justify-center btn-base border-light border-1 rounded-md w-fit text-light hover:text-dark hover:bg-light duration-150">Learn more
        <Icon name="lucide:arrow-right" />
      </NuxtLink>
    </div>
  </article>
</template>

<style scoped>
article {
  box-shadow: 0px 0px 5px 1px var(--color-chocolate)
}
</style>

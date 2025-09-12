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
  <article class="flex flex-col">
    <NuxtImg :src="props.imgUrl"></NuxtImg>
    <div class="text flex flex-col">
      <div class="text_info flex flex-col">
        <h3>{{ props.title }}</h3>
        <p>{{ props.desc }}</p>
      </div>
      <NuxtLink :to="props.linkTo" class="bg-beige text-espresso"></NuxtLink>
    </div>
  </article>
</template>

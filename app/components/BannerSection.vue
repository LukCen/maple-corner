<script setup lang="ts">
/**
 * Accepts the following:
 * - direction = 'row' (left-to-right), 'reverse' (right-to-left), 'column' (top-to-bottom) [image is considered the first element in order]
 * - imageUrl: link to the image to use
 * - title = string to use as a title
 * - subtitle = string to use as a subtitle
 * - text = string to use as the text body of the banner
 */
const props = defineProps({
  direction: {
    default: 'row',
    type: String
  },
  imageUrl: {
    default: 'https://placehold.co/800x500/red/white/?text=%22Missing%20imageUrl%20param%20or%20invalid%20URL%22',
    type: String
  },

  title: {
    default: 'Example Title',
    type: String
  },
  subtitle: {
    default: 'Example Subtitle',
    type: String
  },
  text: {
    default: 'Pizza ipsum dolor amet melted cheese sausage broccoli, bbq garlic parmesan chicken and bacon large. Garlic parmesan red onions platter ranch white garlic mozzarella bbq sauce ham. Garlic parmesan pepperoni bbq rib, hawaiian pineapple chicken onions ranch mozzarella NY style bianca peppers sausage. Banana peppers burnt mouth meatball bianca. Stuffed crust buffalo sauce pie, party white pizza chicken and bacon chicken extra cheese hand tossed pineapple. Garlic parmesan garlic sauce white garlic red onions, fresh tomatoes pork mozzarella onions marinara spinach extra sauce bacon & tomato chicken wing.',
    type: String
  }
})

</script>

<template>
  <section :class="{
    'flex-row': props.direction === 'row',
    'flex-row-reverse': props.direction === 'reverse',
    'flex-col': props.direction === 'column'
  }" class="flex gap-4 bg-espresso text-beige h-fit w-full rounded-sm overflow-hidden">

    <NuxtImg :src="props.imageUrl" sizes="100% 100%" />
    <div class="text flex flex-col justify-between p-2">
      <h3 class="font-bold">{{ props.title }}</h3>
      <span class="font-medium"></span>
    </div>
  </section>


</template>

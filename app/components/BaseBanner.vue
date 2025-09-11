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
    default: '/maplecorner_banner_placeholder.jpg',
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
  },
  linkTo: {
    default: "/",
    type: String
  },
  linkText: {
    default: "See in action",
    type: String
  },
  linkIcon: {
    default: "lucide:arrow-right",
    type: String
  }
})

</script>

<template>
  <section :class="{
    'flex-row': props.direction === 'row',
    'flex-row-reverse': props.direction === 'reverse',
    'flex-col': props.direction === 'column'
  }" class="flex gap-4 bg-espresso text-beige h-fit w-full max-w-[1200px] mx-auto rounded-sm overflow-hidden">

    <NuxtImg :src="props.imageUrl" :class="props.direction === 'column' ? 'basis-full max-w-full' : 'basis-1/2 max-w-1/2'" class="flex flex-grow-1 flex-shrink-1" />
    <div :class="props.direction === 'column' ? 'basis-full max-w-full' : 'basis-1/2 max-w-1/2'" class="text flex flex-grow-1 flex-shrink-1 flex-col justify-around p-2">
      <h3>{{ props.title }}</h3>
      <span class="font-bold text-lg">{{ props.subtitle }}</span>
      <p>{{ props.text }}</p>
      <NuxtLink class="btn-base border-beige border-1 w-fit text-beige hover:bg-beige hover:text-espresso rounded-md">
        <span class="font-semibold">{{ props.linkText }}</span>
        <Icon :name="props.linkIcon" />
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
h3 {
  font-family: "Story Script";
  letter-spacing: .1rem;
}
</style>

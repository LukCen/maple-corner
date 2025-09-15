<!-- homepage -->
<script setup lang="ts">
import bgMobile from '~/assets/images/backgrounds/bg_home_mobile.webp';
import bgTablet from '~/assets/images/backgrounds/bg_home_tablet.webp';
import bgDesktop from '~/assets/images/backgrounds/bg_home_desktop.webp';
import bg2k from '~/assets/images/backgrounds/bg_home_2k.webp';
useHead({
  link: [
    { rel: 'preload', type: 'image/webp', as: 'image', href: bgMobile, media: '(width <= 480px)' },
    { rel: 'preload', type: 'image/webp', as: 'image', href: bgTablet, media: '(width >= 481px) and (width <= 1279px)' },
    { rel: 'preload', type: 'image/webp', as: 'image', href: bgDesktop, media: '(width >= 1280px) and (width <= 1920px)' },
    { rel: 'preload', type: 'image/webp', as: 'image', href: bg2k, media: ('width > 1921px') }
  ],
  bodyAttrs: {
    'data-page': 'home'
  }
})
</script>
<template>
  <div class="--landing text-dark h-full flex-1 w-full">
    <section class="welcome flex flex-col gap-4 items-center text-center">
      <h1 class="font-black">Maple Corner - Your friendly coffee place!</h1>
      <p>Hello! Thank you for visiting us. We're Maple Corner, a coffee shop and pattisiere founded in 2025 by Łukasz
        Cena.</p>
      <p>We envisioned this place as a quiet, friendly corner of your town, where you're always welcome to come in and
        relax. Whether you're a programmer looking for a place to work, a writer in search of inspiration, a student
        looking for a quick pick-me-up or simply looking for some delicious coffee and homemade baked goods - we're
        here, and we'll be happy to provide!</p>
      <p>Maple Corner prides itself on using only highest quality coffee beans, and all our sweets and cakes use
        ingredients purchased from local farmers and small bussinesses. From the community, to the commmunity!</p>
    </section>
    <section class="grid grid-cols-2">
      <ProductCardBase class="text-beige" />
      <ProductCardBase class="text-beige" />
    </section>
  </div>
</template>
<style scoped>
/* default - mobile */
</style>

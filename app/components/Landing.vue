<!-- homepage -->
<script setup lang="ts">

</script>

<template>
  <main class="--landing text-white h-full flex-1 w-full">
    <h1>Hello! Welcome to Maple Corner.</h1>
  </main>
</template>
<style scoped>
/* default - mobile */
@media (max-width: 480px) {
  main::before {
    background-image: url("~/assets/images/backgrounds/bg_home_mobile.webp")
  }
}
/* tablet */
@media(min-width: 481px) and (max-width:1279px) {
  main::before {
    background-image: url("~/assets/images/backgrounds/bg_home_tablet.webp")
  }
}
/* large tablets, laptops and desktop <= 1080p */
@media(min-width: 1280px) and (max-width: 1920px) {
  main::before {
    background-image: url("~/assets/images/backgrounds/bg_home_desktop.webp")
  }
}
/* screens > 1080p */
@media (min-width: 1921px) {
  main::before {
    background-image: url("~/assets/images/backgrounds/bg_home_2k.webp")
  }
}
</style>

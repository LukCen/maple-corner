<template>
  <NuxtLayout name="default">
    <NuxtRouteAnnouncer />
    <MainMenu />
    <NuxtPage />
  </NuxtLayout>
</template>
<style>
@media (max-width: 480px) {
  body::before {
    background-image: url("~/assets/images/backgrounds/bg_home_mobile.webp")
  }
}
/* tablet */
@media(min-width: 481px) and (max-width:1279px) {
  body::before {
    background-image: url("~/assets/images/backgrounds/bg_home_tablet.webp")
  }
}
/* large tablets, laptops and desktop <= 1080p */
@media(min-width: 1280px) and (max-width: 1920px) {
  body::before {
    background-image: url("~/assets/images/backgrounds/bg_home_desktop.webp")
  }
}
/* screens > 1080p */
@media (min-width: 1921px) {
  body::before {
    background-image: url("~/assets/images/backgrounds/bg_home_2k.webp")
  }
}
</style>

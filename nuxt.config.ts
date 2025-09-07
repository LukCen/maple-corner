import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()]
  },
  css: ['~/assets/styles/tailwind.css', '~/assets/styles/style.scss'],
  app: {
    head: {
      title: 'Maple Corner',
      meta: [
        { name: 'description', content: 'Warm and cozy coffee shop, for all your caffeine and sugar needs!' }
      ]
    }
  }
})

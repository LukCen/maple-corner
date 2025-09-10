import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    plugins: [tailwindcss()]
  },
  css: ['~/assets/styles/tailwind.css', '~/assets/styles/style.scss'],
  modules: ['@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@vueuse/nuxt', '@pinia/nuxt'],
  fonts: {
    priority: ['bunny', 'google'],
    defaults: {
      weights: ['300 400 500 600 700']
    }
  },
  app: {
    head: {
      title: 'Maple Corner',
      meta: [
        { name: 'description', content: 'Warm and cozy coffee shop, for all your caffeine and sugar needs!' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' }
      ]
    }
  }
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  compatibilityDate: "2024-07-03",
  modules: ["@nuxt/ui"],
  ui: {
    safelistColors: ['black']
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
})
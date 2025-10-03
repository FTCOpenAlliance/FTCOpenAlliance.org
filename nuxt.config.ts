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
      "@tailwindcss/postcss": {},
    },
  },
  compatibilityDate: "2024-07-03",
  modules: ["@nuxt/ui", "@nuxt/icon", '@formkit/nuxt', 'nuxt-echarts'],
  ui: {
    theme: {
      colors: [
        'primary',
        'secondary',
        'success',
        'warning',
        'error'
      ]
    }
  },
  echarts: {
    renderer: ['canvas'],
    charts: ['BarChart', 'PieChart'],
    components: ['TitleComponent', 'LegendComponent', 'VisualMapComponent', 'DatasetComponent', 'GridComponent', 'TooltipComponent'],
    features: ['LabelLayout', 'UniversalTransition'],
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.API_DEV_URL || 'https://api.ftcopenalliance.org',
    }
  }
})
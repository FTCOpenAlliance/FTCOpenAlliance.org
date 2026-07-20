import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: [
        '@formkit/core',
        '@vue/devtools-core',
        '@vue/devtools-kit',
        'vue-qrcode-reader',
      ]
    }
  },
  compatibilityDate: "2025-07-15",
  modules: ["@nuxt/ui", "@nuxt/icon", '@formkit/nuxt', 'nuxt-echarts', 'nuxt-qrcode'],
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
  icon: {
    serverBundle: {
      collections: ['heroicons', 'mdi']
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
      // API_URL: process.env.API_DEV_URL || 'https://api.theopenalliance.org',
      API_URL: 'https://api.theopenalliance.org'
    }
  }
})
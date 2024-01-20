// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/storybook', '@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  storybook: {
    // Options
    url: 'http://localhost:6006',
    port: 6006,
  },
  ssr: false,
  runtimeConfig: {
    apiKey: process.env.NUXT_API_KEY || '',
    apiBaseUrl: process.env.NUXT_API_BASE_URL || '',
    public: {
      imgBaseUrl: ''
    }
  },
});

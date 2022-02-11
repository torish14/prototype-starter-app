import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  buildModules: ['nuxt-windicss'],
    '@nuxtjs/device',
  windicss: {
    analyze: true,
  },
  typescript: {
    strict: true,
  },
})

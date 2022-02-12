import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  modules: ['@nuxtjs/robots'],
    '@nuxtjs/firebase',
    'nuxt-logrocket',
  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/device',
    '@nuxtjs/pwa',
    '@pinia/nuxt',
  ],
  windicss: {
    analyze: true,
  },
  firebase: {
    lazy: false,
    config: {
      apiKey: '<apiKey>',
      authDomain: '<authDomain>',
      projectId: '<projectId>',
      storageBucket: '<storageBucket>',
      messagingSenderId: '<messagingSenderId>',
      appId: '<appId>',
      measurementId: '<measurementId>',
    },
    onFirebaseHosting: false,
    services: {
      auth: {
        ssr: true,
      },
      firestore: true,
      functions: true,
      storage: true,
      database: true,
      messaging: true,
      performance: true,
      analytics: true,
      remoteConfig: true,
    },
  },
  logRocket: {
    // configure LogRocket
    logRocketId: '',
    devModeAllowed: false,
    config: {
      //
    },
  },
  typescript: {
    strict: true,
  },
})

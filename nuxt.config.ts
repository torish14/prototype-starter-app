import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: true,
  cli: {
    badgeMessages: ['待たせたな。'],
  },
  modules: [
    '@nuxtjs/firebase',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    'nuxt-logrocket',
    '@nuxtjs/sentry',
    '@nuxt/image',
    'nuxt-speedkit',
    '@nuxtjs/gtm',
  ],
  buildModules: [
    'nuxt-windicss',
    '@nuxtjs/device',
    '@nuxtjs/pwa',
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  plugins: ['~/plugins/jsonld'],
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
  robots: {
    UserAgent: '*',
    Disallow: '/',
  },
  sitemap: {
    hostname: 'https://example.com',
    gzip: true,
    exclude: ['/secret', '/admin/**'],
    routes: [
      '/page/1',
      '/page/2',
      {
        url: '/page/3',
        changefreq: 'daily',
        priority: 1,
        lastmod: '2017-06-30T13:30:00.000Z',
      },
    ],
  },
  logRocket: {
    // configure LogRocket
    logRocketId: '',
    devModeAllowed: false,
    config: {
      //
    },
  },
  sentry: {
    dsn: '', // Enter your project's DSN here
    // Additional Module Options go here
    // https://sentry.nuxtjs.org/sentry/options
    config: {
      // Add native Sentry config here
      // https://docs.sentry.io/platforms/javascript/guides/vue/configuration/options/
    },
  },
  vueuse: {
    ssrHandlers: true,
  },
  speedkit: {
    detection: {
      performance: true,
      browserSupport: true,
    },
    performanceMetrics: {
      device: {
        hardwareConcurrency: { min: 2, max: 48 },
        deviceMemory: { min: 2 },
      },
      timing: {
        fcp: 800,
        dcl: 1200,
      },
      lighthouseDetectionByUserAgent: false,
    },
  },
  gtm: {
    id: 'GTM-XXXXXXX',
  },
  typescript: {
    strict: true,
  },
})

export default {
  srcDir: 'app',

  ssr: true,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'prototype-starter-app',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/jsonld.js', mode: 'client' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  cli: {
    badgeMessages: ['待たせたな。'],
  },

  render: {
    ssrLog: 'collapsed',
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://typed-vuex.roe.dev
    'nuxt-typed-vuex',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    'nuxt-windicss',
    'nuxt-compress',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://firebase.nuxtjs.org
    '@nuxtjs/firebase',
    // https://github.com/nuxt-community/nuxt-logrocket
    'nuxt-logrocket',
    // https://github.com/nuxt-community/robots-module
    '@nuxtjs/robots',
    // https://sitemap.nuxtjs.org
    '@nuxtjs/sitemap',
  ],

  'nuxt-compress': {
    gzip: {
      cache: true,
    },
    brotli: {
      threshold: 10240,
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ja',
    },
  },

  firebase: {
    config: {
      apiKey: '<apiKey>',
      authDomain: '<authDomain>',
      projectId: '<projectId>',
      storageBucket: '<storageBucket>',
      messagingSenderId: '<messagingSenderId>',
      appId: '<appId>',
      measurementId: '<measurementId>',
    },
    services: {
      auth: {
        persistense: 'local',
        initialize: {
          onAuthStateChangedAction: 'onAuthStateChanged',
        },
        ssr: false,
      },
      firestore: {
        memoryOnly: false,
        enablePersistence: true,
      },
      analytics: {
        collectionEnabled: true,
      },
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

  robots: {
    /* module options */
  },

  sitemap: {
    // options
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
    devtools: true,
    extractCSS: true,
    transpile: [/typed-vuex/],
  },
}

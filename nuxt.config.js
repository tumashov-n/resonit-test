export default {
  env: {
    URL_IMAGES: process.env.URL_IMAGES
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Министерство Просвещения РФ',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'msapplication-TileColor', content: '#2fd385' },
      { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
      { name: 'theme-color', content: '#2fd385' }
    ],
    link: [
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
      { rel: 'manifest', href: '/favicon/site.webmanifest' },
      { rel: 'mask-icon', color: '#2fd385', href: '/favicon/safari-pinned-tab.svg' },
      { rel: 'shortcut icon', href: '/favicon/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/css/reset.css',
    '@/static/css/fonts.css',
    '@/static/css/base.scss' 
  ], 

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/extension-axios' },

    // filters
    { src: '~/filters/date.filter.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],

  auth: {
    strategies: {
      local: {
        token: {
          property: 'data.token',
          global: true,
          // required: true,
          type: 'Bearer'
        },
        user: {
          // property: 'user',
          // autoFetch: true,
          clientId: true,
          scope: true
        },
        endpoints: {
          login: { url: 'auth', method: 'post', propertyName: 'data.token' },
          // logout: { url: '', method: 'post' },
          user: false
          // user: { url: 'auth', method: 'post', propertyName: 'data.token' }
        }
      }
    },
    redirect: {
      user: '/subject',
      login: '/login',
      logout: '/',
      callback: '/login',
      home: '/subject'
    }
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'http://api.efs.demostorage.site/api/v1/'
  },

  router: {
    middleware: ['auth']
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}

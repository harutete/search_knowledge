// nuxt.config.js
export default {
  buildModules: ['@nuxt/typescript-build'],
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-fontawesome'
  ],
  styleResources: {
    scss: [
      '~/assets/scss/_variable.scss',
      '~/assets/scss/_nomalize.scss',
      '~/assets/scss/_layout.scss',
      '~/assets/scss/_title.scss',
      '~/assets/scss/_list.scss',
      '~/assets/scss/_utility.scss',
     ]
  },
  fontawesome: {
    component: 'fa'
  },
  plugins: [
    { src: '~/plugins/dateFormat.ts' },
    { src: '~/plugins/cookieStorage.ts' }
  ],
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=M+PLUS+1p&display=swap'}
    ]
  }
}
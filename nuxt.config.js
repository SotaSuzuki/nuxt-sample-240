const pkg = require('./package')

module.exports = {
  mode: 'universal',
  srcDir: 'src',

  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  loading: { color: '#fff' },

  css: ['element-ui/lib/theme-chalk/index.css'],

  plugins: ['@/plugins/element-ui'],

  modules: ['@nuxtjs/pwa', '~/modules/sample'],

  router: {
    middleware: ['auth']
  },

  build: {
    transpile: [/^element-ui/],

    extend(config, ctx) {}
  }
}

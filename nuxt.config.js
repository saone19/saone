module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  server: {
    host: '0.0.0.0'
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: ' theme-color', content: '#f08500' },
      {
        name: 'keywords',
        content:
          'digital hollywood university,dhu,study in japan,music video,shot film,web design,japan'
      },
      {
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { name: 'og:title', content: 'SAONE Project' },
      { name: 'og:site_name', content: 'SAONE' },
      { name: 'og:url', content: 'saone.netlify.app' },
      {
        name: 'og:description',
        content: process.env.npm_package_description || ''
      },
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: 'https://saone.netlify.app/ogp.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'SAONE Project' },
      { name: 'twitter:domain', content: 'saone.netlify.app' },
      { name: 'twitter:creator', content: '@nerd_yue' },
      {
        name: 'twitter:description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/_global.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js modules
   */
  webfontloader: {
    google: {
      families: [
        // 'Gugi',
        // 'Megrim',
        // 'Federant',
        // 'Metamorphous',
        'Macondo Swash Caps'
        // 'Gabriela'
      ]
    }
  },
  modules: [
    '@nuxtjs/pwa',
    'nuxt-webfontloader',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-143792953-1'
      }
    ]
    // '@nuxtjs/eslint-module'
  ],
  /*
   ** Generate configuration
   */
  generate: {
    routes: ['404']
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) { }
  }
}

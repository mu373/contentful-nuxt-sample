require('dotenv').config();

export default {
  target: 'static', // default is 'server'

  server: {
    port: 8000, // デフォルト: 3000
    host: '0.0.0.0' // デフォルト: localhost
  },

  buildModules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/dotenv',
    '@nuxtjs/dayjs'
  ],

  plugins: ['~/plugins/contentful.js'],

  // API key
  // env: {
  //   ContentfulSpaceId: process.env.CTF_SPACE_ID,
  //   ContentfulAccessToken: process.env.CTF_CDA_ACCESS_TOKEN,
  // },

  css: ['./assets/style/modern-css-reset.css'],

  styleResources: {
    // scss: ['@/assets/style/global.scss']
  },


  dayjs: {
    defaultTimezone: 'Asia/Tokyo',
    // defaultLocale: 'ja',
    locales: ['en', 'ja']
  }

};

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      title: 'TESDA Organizational Excellence Awards',
      link: [
        // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }, 
        { rel: 'icon', type: 'image/png', href: '/img/toea-icon.png' }
      ]
    }
  }
})

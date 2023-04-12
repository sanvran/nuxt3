// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: [
      '@nuxtjs/tailwindcss'
   ],
   app: {
      head: {
         title: 'my default title',
         meta: [
           { charset: 'utf-8' },
           { name: 'viewport', content: 'width=device-width, initial-scale=1' },
           {
             hid: 'description',
             name: 'description',
             content: 'my website description'
           }
         ],
         link: [{ rel: 'stylesheet', href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"}]
       }
   }
})

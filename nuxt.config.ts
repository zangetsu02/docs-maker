import { createResolver } from "nuxt/kit"

const { resolve } = createResolver(import.meta.url)

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@unocss/nuxt",
    "@nuxtjs/color-mode"
  ],
  colorMode: {
    classSuffix: '',
  },
  content: {
    documentDriven: true,
  },
  components: [
    {
      prefix: '',
      path: resolve('./components/app'),
      global: true
    },
    {
      prefix: '',
      path: resolve('./components/docs'),
      global: true
    }
  ],
})
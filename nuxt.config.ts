// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  build: {
    transpile: [
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-solid-svg-icons",
      "@fortawesome/free-regular-svg-icons",
      "@fortawesome/vue-fontawesome",
    ],
  },
  modules: ["@nuxtjs/tailwindcss", "@tailwindcss/typography"],

  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: true,
  },
  runtimeConfig: {
    private: {
      mcApiKey: process.env.MC_API_KEY,
    },
    public: {
      mcAudId: process.env.MC_AUDIENCE_ID,
      mcServer: process.env.MC_SERVER_PREFIX,
    },
  },
});

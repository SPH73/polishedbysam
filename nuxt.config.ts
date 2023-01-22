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
  modules: [
    "@nuxtjs/tailwindcss",
    "@tailwindcss/typography",
    // "nuxt-newsletter",
  ],
  // newsletter: {
  //   mailchimp: {
  //     apiKey: process.env.MAILCHIMP_API_KEY,
  //     audienceId: process.env.MAILCHIMP_AUDIENCE_ID,
  //     serverPrefix: process.env.MAILCHIMP_SERVER_PREFIX,
  //   },
  // },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: true,
  },
  runtimeConfig: {
    private: {
      mcApiKey: process.env.MAILCHIMP_API_KEY,
    },
    public: {
      mcAudId: process.env.MAILCHIMP_AUDIENCE_ID,
      mcServer: process.env.MAILCHIMP_SERVER_PREFIX,
    },
  },
});

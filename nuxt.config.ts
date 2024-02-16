// https://nuxt.com/docs/api/configuration/nuxt-config

const defineNuxtConfig = {
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};

export default {
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
};

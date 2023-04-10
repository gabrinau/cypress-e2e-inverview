const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://danube-web.shop/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

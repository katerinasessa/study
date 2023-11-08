const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {      
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  },

  // Access all the environment variables
  "env": {

    /* URL */
    "url": "https://gocamp:gocamp@staging-front.gocamp.com",
    //"url": "https://www.gocamp.com",

    /* USER DATA */
    "user": "kateryna.sessa@rubygarage.org",    
    "owner": "kateryna.sessa+owner@rubygarage.org",
    "password": "qwerty",
    "255charslength": "X8jBk6ElhkMJqOkmtYhZOIG7j5dOHtBQ4fEMUK9Wftth9B3HZPERy5ftiA1QmLLro0qgTXHcl1JrQVjtcvjdtVem1dzsgOvfRh3sxIiMCKBQHw8l9mDoTB3lX07dy2deCMorqrBVvPwwFmECKb8R4MkLSGQNpFkXWjA2FAusVkkKudMiTbiptt5Nyc6WonpcnHhtI4xxmmxl2YSyk5e8D8KgWeOIeqpmeA7X5gZmBotzEhn7SFnEGIfgsfcWHsb",
    "72charslength": "YM9m6TASkIC9h60e3J9E1BLQYx41wBMS1bJ3Hx0kOncbZDUjav7U2pmXLWmDm2RdxuyNtpAP"
  }
})
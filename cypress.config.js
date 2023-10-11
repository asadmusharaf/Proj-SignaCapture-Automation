const { defineConfig } = require("cypress");
const { verifyDownloadTasks } = require('cy-verify-downloads');


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  defaultCommandTimeout: 10000,
  responseTimeout: 10000,
  chromeWebSecurity: false,
  
  

  e2e: {
    setupNodeEvents(on, config) {
      
      require('cypress-mochawesome-reporter/plugin')(on);
      on('task', verifyDownloadTasks);
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
      
    },
    
    experimentalModifyObstructiveThirdPartyCode: false,
    // experimentalSkipDomainInjection: ['*.shopify.com', '*.admin.shopify.com', '*.accounts.shopify.com']
  },
});

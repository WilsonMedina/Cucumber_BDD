const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {

await preprocessor.addCucumberPreprocessorPlugin(on, config);
on("file:preprocessor", browserify.default(config));
return config;

}

module.exports = defineConfig({

e2e: {

	setupNodeEvents,
	specPattern: "cypress/e2e/features/*.feature",
	chromeWebSecurity: false,
	video: false,
	retries: 0,
	
    env: {
		baseUrl: 'https://www.saucedemo.com',
		endpoint: {
			inventory: '/inventory.html'
		},
		login: {
			username: 'standard_user',
			password: 'secret_sauce'
		}
	}

  }

});


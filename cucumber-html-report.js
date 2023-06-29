const report = require("multiple-cucumber-html-reporter")

report.generate({
  jsonDir: "jsonlogs", // ** Path of .json file **//
  reportPath: "./reports/cucumber-htmlreport.html",
  metadata: {
    browser: {
      name: "chrome",
      version: "XX",
    },
    device: "Local test machine",
    platform: {
      name: 'ubuntu',
			version: '16.04',
    },
  },
  customData: {
		title: 'Cucumber HTML Report',
		data: [
			{ label: 'Project', value: 'Cucumber in Cypress' },
		],
	},
})
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://fa-euth-dev58-saasfademo1.ds-fa.oraclepdemos.com/",
  },
  env: {
    baseUrl: "https://fa-euth-dev58-saasfademo1.ds-fa.oraclepdemos.com/",
    user: {
      username: "Noah.Miller",
      password: "p!OPhlP1",
    },
    globalHR: {
      basicDetails: {
        hireDate: "1 - Feb - 2019",
        hireAction: "Hire",
        hireReason: "Hire",
        legalEmployer: "XYZ Pharmaceutical",
      },
      personalDetails: {
        personNumber: "UAT10030",
        lastName: "UAT1Smith",
        firstName: "UAT1Kyle",
        preferredName: "Kyle",
        gender: "Male",
        dateBirth: "1 - Jan - 1970",
      },
      nationalIdentifier: {
        country: "United States",
        type: "Soical Security Number",
        nationalID: "111 - 22 - 3344",
      },
    },
  },
});

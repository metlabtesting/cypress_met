import { loginPage } from "../support/Pages/C001-loginPage";
const {
  globalHR: { basicDetails, personalDetails },
  baseUrl,
  user,
} = Cypress.env();

describe("C001-challenge 001", () => {
  beforeEach("", () => {
    cy.visit(baseUrl);
  });
  it("Login sucess", () => {
    loginPage.login(user.username, user.password);
    cy.url().should("contain", "/AtkHomePageWelcome");
  });
});

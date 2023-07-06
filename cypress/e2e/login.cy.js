/// <reference types="cypress" />
import { login } from "../support/Pages/loginPage";
import { productsPage } from "../support/Pages/inventory";
import { sucess_user } from "../fixtures/usuarios.json";

describe("Test del login", () => {
  beforeEach("", () => {
    cy.visit("/");
  });

  it("Login exitoso", () => {
    login.login(sucess_user.usuario, sucess_user.password);
    cy.url().should("include", "/inventory.html");
    cy.get(productsPage.productsContainer).should("exist");
  });

  it("iniciar sesión dejando campos vacíos en el formulario", () => {
    login.login(" ", " ");
    cy.get(login.errorMessage).should("exist");
  });

  it("Prueba con Xpaths", () => {
    cy.xpath("//input[@id='user-name']").type("Day");
  });
});

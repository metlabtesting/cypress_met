class Login {
  constructor() {
    this.loginInput = "#userid";
    this.passInput = "#password";
    this.loginBtn = "#btnActive";
  }

  login(username, password) {
    // aca iria las instrucciones
    cy.get(this.loginInput).type(username);
    cy.get(this.passInput).type(password);
    cy.get(this.loginBtn).click();
  }
}

export const loginPage = new Login();

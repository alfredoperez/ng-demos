describe('shared-ui', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=buttoncomponent--primary&args=type:primary;')
  );
  it('should render the component', () => {
    cy.get('ui-button').should('exist');
  });
});

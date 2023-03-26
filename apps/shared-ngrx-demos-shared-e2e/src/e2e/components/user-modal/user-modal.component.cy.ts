describe('shared-ngrx-demos-shared', () => {
  beforeEach(() => cy.visit('/iframe.html?id=usermodalcomponent--primary'));
  it('should render the component', () => {
    cy.get('ngrx-demos-user-modal').should('exist');
  });
});

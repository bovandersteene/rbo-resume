import { getGreeting } from '../support/app.po';

describe('rbo-resume', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to rbo-resume!');
  });
});

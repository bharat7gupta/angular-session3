import { AngularSession3Page } from './app.po';

describe('angular-session3 App', () => {
  let page: AngularSession3Page;

  beforeEach(() => {
    page = new AngularSession3Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

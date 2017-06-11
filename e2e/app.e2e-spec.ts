import { Angular2SimpleStartPage } from './app.po';

describe('angular2-simple-start App', () => {
  let page: Angular2SimpleStartPage;

  beforeEach(() => {
    page = new Angular2SimpleStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { ApplicationVPage } from './app.po';

describe('application-v App', () => {
  let page: ApplicationVPage;

  beforeEach(() => {
    page = new ApplicationVPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

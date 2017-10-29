import { OfficePage } from './app.po';

describe('office App', () => {
  let page: OfficePage;

  beforeEach(() => {
    page = new OfficePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

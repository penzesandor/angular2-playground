import { AngularCliPage } from './app.po';

describe('angular-cli App', function() {
  let page: AngularCliPage;

  beforeEach(() => {
    page = new AngularCliPage();
  });

  it('should display message saying Let\'s get started with Angular2', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Let\'s get started with Angular2');
  });
});

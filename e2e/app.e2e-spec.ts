import { Ng2CliTestPage } from './app.po';

describe('ng2-cli-test App', function() {
  let page: Ng2CliTestPage;

  beforeEach(() => {
    page = new Ng2CliTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

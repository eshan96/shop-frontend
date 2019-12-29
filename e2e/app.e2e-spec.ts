import { ShopFrontendPage } from './app.po';

describe('shop-frontend App', function() {
  let page: ShopFrontendPage;

  beforeEach(() => {
    page = new ShopFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

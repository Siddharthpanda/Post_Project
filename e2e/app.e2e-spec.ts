import { PostsAppPage } from './app.po';

describe('posts-app App', function() {
  let page: PostsAppPage;

  beforeEach(() => {
    page = new PostsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

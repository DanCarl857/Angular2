import { StudyAppPage } from './app.po';

describe('study-app App', function() {
  let page: StudyAppPage;

  beforeEach(() => {
    page = new StudyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

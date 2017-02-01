import { MyOrganizerPage } from './app.po';

describe('my-organizer App', function() {
  let page: MyOrganizerPage;

  beforeEach(() => {
    page = new MyOrganizerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

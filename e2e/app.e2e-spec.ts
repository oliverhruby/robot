import { RobotPage } from './app.po';

describe('robot App', () => {
  let page: RobotPage;

  beforeEach(() => {
    page = new RobotPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

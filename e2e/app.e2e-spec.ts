import { PresentationWhyReactiveFormsPage } from './app.po';

describe('presentation-why-reactive-forms App', () => {
  let page: PresentationWhyReactiveFormsPage;

  beforeEach(() => {
    page = new PresentationWhyReactiveFormsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

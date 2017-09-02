import { FrontendPage } from './app.po';

describe('App', () => {
  let page: FrontendPage;

  beforeEach(() => {
    page = new FrontendPage();
  });

  describe('Gestor da Central de mandados acessa o sistema', () => {
    it('deve apresentar a tela de login', () => {
      page.navigateTo();

      const form = page.getForm();
      const usuario = form.$('input[type="text"]');
      const senha = form.$('input[type="password"]');
      const submit = form.$('button[type="submit"]');

      expect(form).toBeDefined();
      expect(usuario).toBeDefined();
      expect(senha).toBeDefined();
      expect(submit).toBeDefined();
    });
  });
});

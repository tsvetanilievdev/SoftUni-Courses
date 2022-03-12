import { login } from '../../services/authService.js';
import { loginTemplate } from './loginTemplate.js';

export function loginPage(context) {
  const result = loginTemplate(onSubmit);
  context.renderNav(context.isAuth);
  context.render(result);

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get('email');
    const password = formData.get('password');

    if(email.trim() == '' || password.trim() == ''){
        return context.render(loginTemplate(onSubmit, 'All fields must be completed!'));
    }

    try {
      await login(email, password);
      context.page.redirect('/home');
    } catch (error) {
      return context.render(loginTemplate(onSubmit, error.message));
    }
  }
}

import { register } from '../../services/authService.js';
import { registerTemplate } from './registerTemplate.js';

export function registerPage(context) {
  const result = registerTemplate(onSubmit);
  context.renderNav(context.isAuth);
  context.render(result);

  async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const email = formData.get('email');
    const username = formData.get('username');
    const password = formData.get('password');
    const rePass = formData.get('repass');

    if (email.trim() == '' || password.trim() == '' || username.trim() == '' || rePass.trim() == '') {
      return context.render(registerTemplate(onSubmit, 'All fields must be completed!'));
    }
    if(password.trim() !== rePass.trim()){
        return context.render(registerTemplate(onSubmit, 'The passwords must be the same!'));
    }

    try {
      await register(email, username, password);
      context.page.redirect('/home');
    } catch (error) {
      return context.render(registerTemplate(onSubmit, error.message));
    }
  }
}


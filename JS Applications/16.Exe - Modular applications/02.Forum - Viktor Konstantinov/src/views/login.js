import { login } from '../api/api.js';
import { html } from '../lib.js';
import { createSubmtiHandler } from '../util.js';

const LoginTemplate = (onSubmit, errMsg, email) => html` <section id="login">
  <div class="narrow center">
    <header><h1>Login</h1></header>
    <form @submit=${onSubmit}>
      ${errMsg ? html`<p class="error-msg">${errMsg}</p>` : null}
      <label
        ><span>Email</span
        ><input type="text" name="email" .values=${email}
      /></label>
      <label
        ><span>Password</span><input type="password" name="password"
      /></label>
      <input class="action" type="submit" value="Sign in" />
    </form>
  </div>
</section>`;

export function LoginPage(context) {
  update();

  function update(errMsg = '', email = '') {
    context.render(
      LoginTemplate(createSubmtiHandler(onSubmit, 'email', 'password'), errMsg, email)
    );
  }

  async function onSubmit(data) {
    try {
      await login(data.email, data.password);
      context.updateUserNav();
      context.page.redirect('/topics');
    } catch (error) {
      const message = error.message || error.error.message;
      update(message, data.email);
    }
  }
}

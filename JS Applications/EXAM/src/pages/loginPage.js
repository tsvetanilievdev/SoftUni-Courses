import { login } from '../api/data.js';
import { html } from '../lib.js';

const loginTemplate = (onSubmit) => html`
  <section id="loginaPage">
    <form @submit=${onSubmit} class="loginForm">
      <h2>Login</h2>
      <div>
        <label for="email">Email:</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="steven@abv.bg"
          value=""
        />
      </div>
      <div>
        <label for="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="********"
          value=""
        />
      </div>

      <button class="btn" type="submit">Login</button>

      <p class="field">
        <span>If you don't have profile click <a href="/register">here</a></span>
      </p>
    </form>
  </section>
`;

export async function loginPage(context) {
  context.render(loginTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    if (email.trim() == '' || password.trim() == '') {
      return alert('All field are mandatory!');
    }

    await login(email, password);
    context.updateUserNav();
    e.target.reset();
    context.page.redirect('/');
  }
}

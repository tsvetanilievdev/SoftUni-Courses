import { register } from '../api/data.js';
import { html } from '../lib.js';

const registerTemplate = (onSubmit) => html`
  <section id="registerPage">
    <form @submit=${onSubmit} class="registerForm">
      <h2>Register</h2>
      <div class="on-dark">
        <label for="email">Email:</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="steven@abv.bg"
          value=""
        />
      </div>

      <div class="on-dark">
        <label for="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="********"
          value=""
        />
      </div>

      <div class="on-dark">
        <label for="repeatPassword">Repeat Password:</label>
        <input
          id="repeatPassword"
          name="repeatPassword"
          type="password"
          placeholder="********"
          value=""
        />
      </div>

      <button class="btn" type="submit">Register</button>

      <p class="field">
        <span>If you have profile click <a href="/login">here</a></span>
      </p>
    </form>
  </section>
`;

export async function registerPage(context) {
  context.render(registerTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');
    const repeatPassword = formData.get('repeatPassword');

    if (email.trim() == '' || password.trim() == '') {
      return alert('All field are mandatory!');
    }
    if (password.trim() != repeatPassword.trim()) {
      return alert('The passwords must be the same');
    }

    await register(email, password);
    context.updateUserNav();
    e.target.reset();
    context.page.redirect('/');
  }
}

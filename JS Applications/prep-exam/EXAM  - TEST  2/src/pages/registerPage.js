import { register } from '../api/data.js';
import { html } from '../lib.js';
const registerTemplate = (onSubmit) => html`
  <section id="register-page" class="content auth">
    <form @submit=${onSubmit} id="register">
      <div class="container">
        <div class="brand-logo"></div>
        <h1>Register</h1>

        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="maria@email.com"
        />

        <label for="pass">Password:</label>
        <input type="password" name="password" id="register-password" />

        <label for="con-pass">Confirm Password:</label>
        <input type="password" name="confirm-password" id="confirm-password" />

        <input class="btn submit" type="submit" value="Register" />

        <p class="field">
          <span>If you already have profile click <a href="/login">here</a></span>
        </p>
      </div>
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
    const rePass = formData.get('confirm-password');

    if(email.trim() == '' || password.trim() == ''){
        return alert('All field are mandatory!');
    }
    if(password.trim() != rePass.trim()){
        return alert('The passwords must be the same');
    }

    await register(email, password);
    context.updateUserNav();
    e.target.reset();
    context.page.redirect('/');
  }
}

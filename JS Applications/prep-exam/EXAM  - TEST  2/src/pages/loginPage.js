import { login } from '../api/data.js';
import { html } from '../lib.js';
const loginTemplate = (onSubmit) => html`
  <section id="login-page" class="auth">
    <form @submit=${onSubmit} id="login">
      <div class="container">
        <div class="brand-logo"></div>
        <h1>Login</h1>
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Sokka@gmail.com"
        />

        <label for="login-pass">Password:</label>
        <input type="password" id="login-password" name="password" />
        <input type="submit" class="btn submit" value="Login" />
        <p class="field">
          <span>If you don't have profile click <a href="/register">here</a></span>
        </p>
      </div>
    </form>
  </section>
`;

export async function loginPage(context){
    context.render(loginTemplate(onSubmit));

    async function onSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');

        if(email.trim() == '' || password.trim() == ''){
            return alert('All field are mandatory!');
        }

        await login(email, password);
        context.updateUserNav();
        e.target.reset();
        context.page.redirect('/');
    }

}
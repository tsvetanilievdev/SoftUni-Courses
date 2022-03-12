import { login } from '../api/data.js';
import { html } from '../lib.js';

const loginTemplate = (onSubmit) => html`
  <!-- Login Page ( Only for Guest users ) -->
  <section id="login-page" class="login">
    <form @submit=${onSubmit} id="login-form" action="" method="">
      <fieldset>
        <legend>Login Form</legend>
        <p class="field">
          <label for="email">Email</label>
          <span class="input">
            <input type="text" name="email" id="email" placeholder="Email" />
          </span>
        </p>
        <p class="field">
          <label for="password">Password</label>
          <span class="input">
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </span>
        </p>
        <input class="button submit" type="submit" value="Login" />
      </fieldset>
    </form>
  </section>
`;

export async function loginPage(context) {
    context.render(loginTemplate(onSubmit))

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

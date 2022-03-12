import { register } from '../api/data.js';
import { html } from '../lib.js';

const registerTemplate = (onSubmit) => html`
  <!-- Register Page ( Only for Guest users ) -->
  <section id="register-page" class="register">
    <form @submit=${onSubmit} id="register-form" action="" method="">
      <fieldset>
        <legend>Register Form</legend>
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
        <p class="field">
          <label for="repeat-pass">Repeat Password</label>
          <span class="input">
            <input
              type="password"
              name="confirm-pass"
              id="repeat-pass"
              placeholder="Repeat Password"
            />
          </span>
        </p>
        <input class="button submit" type="submit" value="Register" />
      </fieldset>
    </form>
  </section>
`;

export async function registerPage(context) {

    context.render(registerTemplate(onSubmit))

    async function onSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        const rePass = formData.get('confirm-pass');

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

import { register } from '../api/data.js';
import { notify } from '../common/notify.js';
import { html } from '../lib.js';

const registerTemplate = (onSubmit) => html`
  <section id="register">
    <form @submit=${onSubmit} id="register-form">
      <div class="container">
        <h1>Register</h1>
        <label for="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Enter Username"
          name="username"
        />
        <label for="email">Email</label>
        <input id="email" type="text" placeholder="Enter Email" name="email" />
        <label for="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter Password"
          name="password"
        />
        <label for="repeatPass">Repeat Password</label>
        <input
          id="repeatPass"
          type="password"
          placeholder="Repeat Password"
          name="repeatPass"
        />
        <div class="gender">
          <input type="radio" name="gender" id="female" value="female" />
          <label for="female">Female</label>
          <input type="radio" name="gender" id="male" value="male" checked />
          <label for="male">Male</label>
        </div>
        <input type="submit" class="registerbtn button" value="Register" />
        <div class="container signin">
          <p>Already have an account?<a href="/login">Sign in</a>.</p>
        </div>
      </div>
    </form>
  </section>
`;

export async function registerPage(context, next) {
    context.render(registerTemplate(onSubmit))

    async function onSubmit(e) {
        e.preventDefault();
    
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        const repeatPass = formData.get('repeatPass');
        const username = formData.get('username');
        const gender = formData.get('gender');
    
        if (email.trim() == '' || password.trim() == '' || username.trim() == '' || gender == undefined) {
          return notify('Please fill all mandatory fields!');
        }
    
        await register(username, email, password, gender);
        context.updateUserNav();
        context.page.redirect('/all-memes');
      }
}

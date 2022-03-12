import { register } from '../api/data.js';
import { html } from './../../node_modules/lit-html/lit-html.js';

const registerTemplate = (onSubmit,errorMessage, invalidEmail,invalidPass,invalidRePass) => html`
<div class="row space-top">
    <div class="col-md-12">
      <h1>Register New User</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  <form @submit=${onSubmit}>
    <div class="row space-top">
      <div class="col-md-4">
        ${errorMessage ? html`<div class="form-group"><p>${errorMessage}</p></div>` : ''}
      
        <div class="form-group">
          <label class="form-control-label" for="email">Email</label>
          <input
            class=${'form-control ' + (invalidEmail ? 'is-invalid' : '')}
            id="email"
            type="text"
            name="email"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="password">Password</label>
          <input
            class=${'form-control ' + (invalidPass ? 'is-invalid' : '')}
            id="password"
            type="password"
            name="password"
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="rePass">Repeat</label>
          <input
            class=${'form-control ' + (invalidRePass ? 'is-invalid' : '')}
            id="rePass"
            type="password"
            name="rePass"
          />
        </div>
        <input type="submit" class="btn btn-primary" value="Register" />
      </div>
    </div>
  </form>`;

export async function registerPage(ctx) {
  ctx.render(registerTemplate(onSubmit));

  async function onSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const email = form.get('email');
    const password = form.get('password');
    const rePass = form.get('rePass');

    if (email.trim() == '' || password.trim() == '' || rePass.trim() == '') {
      return ctx.render(registerTemplate(onSubmit,'All fields must be filled in!',email.trim() == '',password.trim() == '',rePass.trim() == ''));
    }

    if (password !== rePass) {
      return ctx.render(registerTemplate(onSubmit,'The password must be the same!',false, true, true))
    }

    await register(email, password);
    ctx.setUserNav();
    ctx.page.redirect('/');
  }
}

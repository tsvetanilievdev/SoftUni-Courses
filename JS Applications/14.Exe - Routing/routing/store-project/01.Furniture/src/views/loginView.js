import { login } from '../api/data.js';
import { html } from './../../node_modules/lit-html/lit-html.js';

const loginTemplate = (onSubmit, errorMessage, inValidInput) => html`<div class="row space-top">
<div class="col-md-12">
    <h1>Login User</h1>
    <p>Please fill all fields.</p>
</div>
</div>
<form @submit=${onSubmit}>
<div class="row space-top">
    ${errorMessage ? html`<div class="col-md-4"><p>${errorMessage}</p></div>` : ''}

    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="email">Email</label>
            <input class="form-control" id="email" type="text" name="email">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="password">Password</label>
            <input class="form-control" id="password" type="password" name="password">
        </div>
        <input type="submit" class="btn btn-primary" value="Login" />
    </div>
</div>
</form>`

export async function loginPage(ctx) {
    ctx.render(loginTemplate(onSubmit));
    async function onSubmit(event) {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
    
        const email = form.get('email');
        const password = form.get('password');
    
        if (email.trim() == '' || password.trim() == '') {
          return ctx.render(loginTemplate(onSubmit,'All fields must be filled in!',email.trim() == '',password.trim() == ''));
        }
    
        await login(email, password);
        ctx.setUserNav();
        ctx.page.redirect('/');
      }
}
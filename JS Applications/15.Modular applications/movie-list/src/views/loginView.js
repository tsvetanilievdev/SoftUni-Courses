import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';

const loginTemplate = (onSubmit) => html` <form @submit=${onSubmit}>
  <div id="login-container">
    <h2>Login Page</h2>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        name="email"
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        name="password"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>`;

export default function loginPage(ctx) {
  ctx.loading();
  const content = loginTemplate(onSubmit);
  ctx.render(content);
  ctx.setUserNav();
  // ctx.page.redirect('/home');

  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    if (email == '' || password == '') {
      return alert('All fields are required!');
    }

    authService
      .login(email, password)
      .then((res) => {
        ctx.page.redirect('/');
        ctx.setUserNav();
      })
      .catch((err) => console.log(err));
  }
}

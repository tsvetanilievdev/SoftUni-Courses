import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';

const registerTemplate = (onSubmit) => html` <form @submit=${onSubmit}>
  <div id="register-container">
    <h2>Register Page</h2>

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
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label"
        >Repeat Password</label
      >
      <input
        type="password"
        class="form-control"
        id="exampleInputRepeatPassword"
        name="repeatPassword"
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>`;

export default function registerPage(ctx) {
  ctx.loading();
  const content = registerTemplate(onSubmit);
  ctx.render(content);
  ctx.setUserNav();
  // ctx.page.redirect('/home');

  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repeatPassword = formData.get('repeatPassword').trim();

    if (email == '' || password == '' || repeatPassword == '') {
      return alert('All fields are required!');
    }

    if (password !== repeatPassword) {
      return alert('The passwords must be the same!');
    }

    authService
      .register(email, password)
      .then((res) => {
        ctx.page.redirect('/');
        ctx.setUserNav();
      })
      .catch((err) => console.log(err));
  }
}

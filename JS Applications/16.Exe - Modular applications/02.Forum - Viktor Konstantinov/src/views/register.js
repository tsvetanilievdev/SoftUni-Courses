import { register } from '../api/data.js';
import { input } from '../common/input.js';
import { html } from '../lib.js';
import { createSubmtiHandler } from '../util.js';

const RegisterTemplate = (onSubmit, errMsg, errors, values) => html` 
<section id="register">
  <div class="narrow center">
    <header><h1>Register</h1></header>
    <form @submit=${onSubmit}> 
      ${errMsg ? html`<p class="error-msg">${errMsg}</p>` : null}
      ${input('Email', 'text','email', values.email, errors.email)}
      ${input('Username', 'text','username', values.username, errors.username)}
      ${input('Password', 'password','password', values.password, errors.password)}
      ${input('Repeat', 'password','repass', values.repass, errors.repass)}
      <input class="action" type="submit" value="Sign Up" />
    </form>
  </div>
</section>`;

export function RegisterPage(context) {
  update();

  function update(errMsg, errors = {}, values = {}){
    context.render(RegisterTemplate(createSubmtiHandler(
      onSubmit,
      'email',
      'username',
      'password', 
      'repass'
      ), errMsg, errors, values));
  }

  

  async function onSubmit(data, event) { // използваме try catch, когато има грешка да повторим рендирането и да подадем нежните параметри

    console.log('herreee');
    try {
      const missing = Object.entries(data).filter(([k,v]) => v == '');
      if(missing.length > 0){
        const errors = missing.reduce((a, [k,v]) => Object.assign(a,{[k]: true}), {});
        throw {
          error: new Error('All fields are required!'),
          errors
        }
      }

      if(data.password != data.repass){
        throw {
          error: new Error('The passwords must be the same'),
          errors: {
            password: true,
            repass: true
          }
        }
      }
    } catch (err) {
        const message = err.message || err.error.message;
        update(message,err.errors, data)
    }

    await register(data.email, data.username, data.password);
    event.target.reset()
    context.updateUserNav();
    context.page.redirect('/topics');
  }
}

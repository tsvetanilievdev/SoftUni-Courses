import { register } from "../api/data.js";
import { html } from "../lib.js";

const registerTemplate = (onSubmit, errorMsg, errors) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Register New User</h1>
                <p>Please fill all fields.</p>
            </div>
        </div>
        <form @submit=${onSubmit}>
            <div class="row space-top">
                ${errorMsg ? html`<div class="col-md-4 error">${errorMsg}</div>` : null}
                <div class="col-md-4">
                    <div class="form-group">
                        <label class="form-control-label" for="email">Email</label>
                        <input class=${'form-control' + (errors.email ? ' is-invalid' : ' is-valid')} id="email" type="text" name="email">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="password">Password</label>
                        <input class=${'form-control' + (errors.password ? ' is-invalid' : ' is-valid')} id="password" type="password" name="password">
                    </div>
                    <div class="form-group">
                        <label class="form-control-label" for="rePass">Repeat</label>
                        <input class=${'form-control' + (errors.rePass ? ' is-invalid' : ' is-valid')} id="rePass" type="password" name="rePass">
                    </div>
                    <input type="submit" class="btn btn-primary" value="Register" />
                </div>
            </div>
        </form>
`

export function registerPage(context){
  context.render(registerTemplate(onSubmit, null, {}))

  async function onSubmit(event){
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const rePass = formData.get('rePass').trim();

    try {
        if(email == '' || password == ''){
            throw {
                error: new Error('All fields are required!'),
                errors: {
                    email:email == '',
                    password:password == '',
                    rePass: rePass == '',
                }
            }
        }
        
        if(password != rePass){
            throw {
                error: new Error('The passwords must be the same!'),
                errors: {
                    password: true,
                    rePass: true
                }
            }
        }

        await register(email, password);
        context.updateUserNav();
        context.page.redirect('/');
      } catch (err) {
          const errMsg = err.message || err.error.message;
        context.render(registerTemplate(onSubmit, errMsg, err.errors || {}));
      }
  }
}
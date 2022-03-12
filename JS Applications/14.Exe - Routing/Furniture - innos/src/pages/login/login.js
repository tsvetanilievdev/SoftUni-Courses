import { login } from "../../services/auth.js";
import { loginTemplate } from "./loginTemplate.js";

async function onSubmit(context, e){
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');

    await login(email, password);
    context.page.redirect('/dashboard');
}

export async function loginPage(context){
    const boundedLoginHandler = onSubmit.bind(null, context);
    const result = loginTemplate(boundedLoginHandler);
    context.renderMain(result);
}
import { register } from "../../services/auth.js";
import { registerTemplate } from "./registerTemplate.js";

async function onSubmit(context, e){
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get('email');
    const password = formData.get('password');
    const repass = formData.get('rePass');

    await register(email, password);
    context.page.redirect('/dashboard');
}

export async function registerPage(context){
    const boundedregisterHandler = onSubmit.bind(null, context);
    const result = registerTemplate(boundedregisterHandler);
    context.renderMain(result);
}
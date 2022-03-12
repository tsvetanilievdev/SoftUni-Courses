import { navTemplate } from "./navigationTemplate.js";

export function setUserNav(context, next){
    const isLogged = sessionStorage.getItem('authToken') !== null;
    const result = navTemplate(isLogged, context.path);
    context.renderNav(result);
    next()
}
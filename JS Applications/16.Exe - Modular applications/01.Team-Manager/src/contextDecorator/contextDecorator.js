import { render } from "../../node_modules/lit-html/lit-html.js";
import { navigationTemplate } from "../navigation/navigationTemplate.js";
const appElement = document.getElementById('app');
const navElement = document.getElementById('titlebar');
const modalElement = document.getElementById('modal');


export function decorateContext(context, next){
    context.modalElement = modalElement;
    context.render = (content) => render(content,appElement);

    context.isAuth = sessionStorage.getItem('authToken') ? true : false;

    context.renderNav = () => render(navigationTemplate(context.isAuth),navElement);
    next()
}


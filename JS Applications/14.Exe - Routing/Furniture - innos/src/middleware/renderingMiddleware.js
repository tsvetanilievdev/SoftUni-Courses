import { render } from '../../node_modules/lit-html/lit-html.js';
let mainElement = undefined;
let navElement = undefined;

function initiliaze(mainContainer, navContainer) {
  mainElement = mainContainer;
  navElement = navContainer;
}

function renderMain(templateResult){
    return render(templateResult, mainElement);
}

function renderNav(templateResult){
    return render(templateResult, navElement);
}

function decorateContext(context, next){
    context.renderMain = renderMain;
    context.renderNav = renderNav;
    next();
}

export default {
    initiliaze,
    decorateContext
}
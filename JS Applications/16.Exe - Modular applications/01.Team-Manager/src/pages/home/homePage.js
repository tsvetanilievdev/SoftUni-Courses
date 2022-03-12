import { homeTemplate } from './homeTemplate.js';

export function homePage(context) {
  const result = homeTemplate(context.isAuth);
  context.renderNav(context.isAuth);
  context.render(result);
}

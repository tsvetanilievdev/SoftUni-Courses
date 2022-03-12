import renderTemplete from './engine.js';

console.log('here');
//load dynamic content (articles)
//generate article HTML (using templete and content)
//render HTML on the page
async function start() {
  const articles = await (await fetch('./data.json')).json();
  const articleTemplete = await (await fetch('./article.html')).text();

  const main = document.getElementById('content');
  main.innerHTML = articles.map(article => renderTemplete(articleTemplete, article)).join('')
}
start();


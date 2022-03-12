import {html, render} from 'https://unpkg.com/lit-html?module';

const articleTemplete = (article) => html`
<article>
    <header>
        <h3>First Article</h3>
    </header>
    <div id="article-content">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quo ut laborum culpa cumque!</p>
    </div>
    <footer>Author: Tsvetan Iliev</footer>
</article>`;


async function start() {
  const articles = await (await fetch('./data.json')).json();
  const main = document.getElementById('content');

  const article = articleTemplete(articles[0]);
  render(article, main  )
}
start();


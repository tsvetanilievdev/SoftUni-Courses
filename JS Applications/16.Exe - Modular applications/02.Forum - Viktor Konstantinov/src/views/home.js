import { html } from '../lib.js';

const homeTemplate = () => html` 
<section>
  <h1>Welcom to Beauty Softuni</h1>
  <div class="splash">
    <a href="/topics">Browse Beauty Zone topics</a>
  </div>
</section>`;

export function homePage(context){
    context.render(homeTemplate())
}
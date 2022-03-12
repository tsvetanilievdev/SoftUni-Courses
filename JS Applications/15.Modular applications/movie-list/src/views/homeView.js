import { html } from "../../node_modules/lit-html/lit-html.js";
import api from '../services/api.js'


const movieCard = (movie) => html`
<div class="card" style="width: 18rem;">
  <img src="${movie.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${movie.title}</h5>
    <a href="/details/${movie._id}"  class="btn btn-primary">Details</a>
  </div>
</div>`

const homeTemplate = (data) => html`
<ul>
    ${data.map(x => html`<li>${movieCard(x)}</li>`)}
</ul>
`

export default function homePage(ctx){
    ctx.loading();
    api.request('http://localhost:3030/data/movies').then(data => {
      const content = homeTemplate(data)
      ctx.render(content)
      ctx.setUserNav()
    });
}
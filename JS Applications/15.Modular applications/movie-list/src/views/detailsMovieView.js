import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';

const buttonsTemplate = (onEdit, onDelete) => html`
<button @click=${onEdit}>Edit</button>
<button @click=${onDelete}>Delete</button>
`

const detailsMovieTemplate = (movie, isOwner,onEdit, onDelete) => html`
  <div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${movie.img}" class="img-fluid rounded-start" alt="..." />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">
            ${movie.description}
          </p>
          <p class="card-text">
            <small class="text-muted">Last updated 3 mins ago</small>
          </p>
          ${isOwner 
          ? buttonsTemplate(onEdit,onDelete) 
          : ''}
          
        </div>
      </div>
    </div>
  </div>
`;


export default async function detailsMoviePage(ctx) {
    ctx.loading();
  authService.getMovieById(ctx.params.id)
  .then(movie =>{
        const userId = sessionStorage.getItem('userId');
      const isOwner = userId == movie._ownerId;
      const content = detailsMovieTemplate(movie,isOwner,onEdit, onDelete);
      ctx.render(content);
      ctx.setUserNav();
  })


  function onDelete(event){
    authService.deleteMovieById(ctx.params.id).then(res => {
        ctx.page.redirect('/home')
    })
}
  function onEdit(){
      ctx.page.redirect('/edit/'+ ctx.params.id)
  }
}

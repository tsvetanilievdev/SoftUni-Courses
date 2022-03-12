import { html } from "../../node_modules/lit-html/lit-html.js";
import * as authService from '../services/authService.js';


const editMovieTemplate = (movie,onSubmit) => html`<form @submit=${onSubmit}>
<div id="edit-container">
  <h2>Edit a movie</h2>

  <div class="mb-3">
    <label for="title" class="form-label">Title</label>
    <input
      type="text"
      class="form-control"
      id="exampleInputtitle1"
      aria-describedby="titleHelp"
      name="title"
      .value=${movie.title}
    />
  </div>
  <div class="mb-3">
    <label for="title" class="form-label">Description</label>
    <input
      type="text"
      class="form-control"
      id="exampleInputdescription1"
      aria-describedby="descriptionHelp"
      name="description"
      .value=${movie.description}
    />
  </div>
  <div class="mb-3">
    <label for="title" class="form-label">Image URL</label>
    <input
      type="text"
      class="form-control"
      id="exampleInputimg1"
      aria-describedby="imgHelp"
      name="img"
      .value=${movie.img}

    />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</div>
</form>
`

export default async function editMoviePage(ctx){
    ctx.loading();
    authService.getMovieById(ctx.params.id).then(movie => {
        const content = editMovieTemplate(movie, onSubmit);
        ctx.render(content);
        ctx.setUserNav();

    })

    function onSubmit(event){
        event.preventDefault();

        const formData = new FormData(event.target);
        const title = formData.get('title');
        const description = formData.get('description');
        const img = formData.get('img');

        const data = {title, description,img}
        authService.updateMovieById(ctx.params.id, data).then( res => ctx.page.redirect('/details/' + ctx.params.id))
    }
}
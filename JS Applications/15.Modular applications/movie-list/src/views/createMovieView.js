import { html } from '../../node_modules/lit-html/lit-html.js';
import * as authService from '../services/authService.js';
const createMovieTemplate = (onSubmit) => html` <form @submit=${onSubmit}>
  <div id="create-container">
    <h2>Create a movie</h2>

    <div class="mb-3">
      <label for="title" class="form-label">Title</label>
      <input
        type="text"
        class="form-control"
        id="exampleInputtitle1"
        aria-describedby="titleHelp"
        name="title"
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
      />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
</form>`;

export default async function createMoviePage(ctx) {
  ctx.loading();
  const content = createMovieTemplate(onSubmit);
  ctx.render(content);
  ctx.setUserNav();

  function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('img').trim();

    if (title == '' || description == '' || img == '') {
      return alert('All fields must be completed!');
    }

    const data = { title, description, img };
    authService
      .createMovie(data)
      .then((res) => {
        ctx.page.redirect('/home')
      })
      .catch((err) => alert(err.message));
  }
}

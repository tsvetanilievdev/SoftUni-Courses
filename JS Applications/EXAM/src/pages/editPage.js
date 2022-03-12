import { getOneById, updateItem } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (event,onSubmit) => html` 
<section id="editPage">
  <form @submit=${onSubmit} class="theater-form">
    <h1>Edit Theater</h1>
    <div>
      <label for="title">Title:</label>
      <input
        id="title"
        name="title"
        type="text"
        placeholder="Theater name"
        .value=${event.title}
      />
    </div>
    <div>
      <label for="date">Date:</label>
      <input
        id="date"
        name="date"
        type="text"
        placeholder="Month Day, Year"
        .value=${event.date}
      />
    </div>
    <div>
      <label for="author">Author:</label>
      <input
        id="author"
        name="author"
        type="text"
        placeholder="Author"
        .value=${event.author}
      />
    </div>
    <div>
      <label for="description">Theater Description:</label>
      <textarea id="description" name="description" placeholder="Description" .value=${event.description}></textarea>
    </div>
    <div>
      <label for="imageUrl">Image url:</label>
      <input
        id="imageUrl"
        name="imageUrl"
        type="text"
        placeholder="Image Url"
        .value=${event.imageUrl}
      />
    </div>
    <button class="btn" type="submit">Submit</button>
  </form>
</section>`;

export async function editPage(context) {
    const event = await getOneById(context.params.id);

    context.render(editTemplate(event, onSubmit));

    async function onSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const author = formData.get('author');
        const date = formData.get('date');


        if(title.trim() == '' || description.trim() == '' || imageUrl.trim() == '' || author.trim() == '' || date.trim() == ''){
            return alert('All fields are mandatory!');
        }

        await updateItem(context.params.id, {title, description, imageUrl, author, date});
        context.page.redirect('/details/' + context.params.id)
    }
}

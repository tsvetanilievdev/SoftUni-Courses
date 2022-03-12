import { getOneById, updateItem } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (book, onSubmit) => html`
  <section id="edit-page" class="edit">
    <form @submit=${onSubmit} id="edit-form" action="#" method="">
      <fieldset>
        <legend>Edit my Book</legend>
        <p class="field">
          <label for="title">Title</label>
          <span class="input">
            <input
              type="text"
              name="title"
              id="title"
              .value=${book.title}
            />
          </span>
        </p>
        <p class="field">
          <label for="description">Description</label>
          <span class="input">
            <textarea name="description" id="description" .value=${book.description}></textarea>
          </span>
        </p>
        <p class="field">
          <label for="image">Image</label>
          <span class="input">
            <input
              type="text"
              name="imageUrl"
              id="image"
              .value=${book.imageUrl}
            />
          </span>
        </p>
        <p class="field">
          <label for="type">Type</label>
          <span class="input">
            <select id="type" name="type" .value=${book.type}>
              <option value="Fiction">Fiction</option>
              <option value="Romance">Romance</option>
              <option value="Mistery">Mistery</option>
              <option value="Classic">Clasic</option>
              <option value="Other">Other</option>
            </select>
          </span>
        </p>
        <input class="button submit" type="submit" value="Save" />
      </fieldset>
    </form>
  </section>
`;

export async function editPage(context) {
    const book = await getOneById(context.params.id);
    context.render(editTemplate(book, onSubmit))

    async function onSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const type = formData.get('type');

        if(title.trim() == '' || description.trim() == '' || imageUrl.trim() == '' || type.trim() == ''){
            return alert('All fields are mandatory!');
        }

        await updateItem(context.params.id, {title, description, imageUrl, type});
        context.page.redirect('/details/' + context.params.id)
    }

}

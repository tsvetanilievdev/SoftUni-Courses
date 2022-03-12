import { createItem } from '../api/data.js';
import { html } from '../lib.js';

const addTemplate = (onSubmit) => html`
  <section id="create-page" class="create">
    <form @submit=${onSubmit} id="create-form" action="" method="">
      <fieldset>
        <legend>Add new Book</legend>
        <p class="field">
          <label for="title">Title</label>
          <span class="input">
            <input type="text" name="title" id="title" placeholder="Title" />
          </span>
        </p>
        <p class="field">
          <label for="description">Description</label>
          <span class="input">
            <textarea
              name="description"
              id="description"
              placeholder="Description"
            ></textarea>
          </span>
        </p>
        <p class="field">
          <label for="image">Image</label>
          <span class="input">
            <input type="text" name="imageUrl" id="image" placeholder="Image" />
          </span>
        </p>
        <p class="field">
          <label for="type">Type</label>
          <span class="input">
            <select id="type" name="type">
              <option value="Fiction">Fiction</option>
              <option value="Romance">Romance</option>
              <option value="Mistery">Mistery</option>
              <option value="Classic">Clasic</option>
              <option value="Other">Other</option>
            </select>
          </span>
        </p>
        <input class="button submit" type="submit" value="Add Book" />
      </fieldset>
    </form>
  </section>
`;

export async function addPage(context) {
  context.render(addTemplate(onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get('title');
    const description = formData.get('description');
    const imageUrl = formData.get('imageUrl');
    const type = formData.get('type');

    if (
      title.trim() == '' ||
      description.trim() == '' ||
      imageUrl.trim() == '' ||
      type.trim() == ''
    ) {
      return alert('All fields are mandatory!');
    }

    await createItem({ title, description, imageUrl, type });
    context.page.redirect('/');
  }
}

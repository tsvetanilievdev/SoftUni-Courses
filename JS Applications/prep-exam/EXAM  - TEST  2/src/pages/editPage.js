import { getOneById, updateItem } from '../api/data.js';
import { html } from '../lib.js';

const editTemplate = (game, onSubmit) => html` 
<!-- Edit Page ( Only for the creator )-->
  <section id="edit-page" class="auth">
    <form @submit=${onSubmit} id="edit">
      <div class="container">
        <h1>Edit Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" .value=${game.title} />

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" .value=${game.category} />

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${game.maxLevel} />

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" .value=${game.imageUrl} />

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary" .value=${game.summary}></textarea>
        <input class="btn submit" type="submit" .value="Edit Game" />
      </div>
    </form>
  </section>`;

export async function editPage(context){
    const game = await getOneById(context.params.id);
    context.render(editTemplate(game, onSubmit));

    async function onSubmit(e){
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const title = formData.get('title');
        const category = formData.get('category');
        const maxLevel = formData.get('maxLevel');
        const imageUrl = formData.get('imageUrl');
        const summary = formData.get('summary');

        if (
            title.trim() == '' ||
            category.trim() == '' ||
            imageUrl.trim() == '' ||
            maxLevel.trim() == '' ||
            summary.trim() == ''
          ) {
            return alert('All fields are mandatory!');
          }

        await updateItem(context.params.id, {title, category, maxLevel, imageUrl,summary});
        context.page.redirect('/details/' + context.params.id)
    }
}
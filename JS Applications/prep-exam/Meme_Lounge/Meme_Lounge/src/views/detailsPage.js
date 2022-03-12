import { deleteMemeById, getOneById } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const detailsTemplate = (meme, isOwner, deleteHandler) => html`
  <section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
      <div class="meme-img">
        <img alt="meme-alt" src=${meme.imageUrl} />
      </div>
      <div class="meme-description">
        <h2>Meme Description</h2>
        <p>${meme.description}</p>

        <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->

        ${isOwner 
            ? html`
            <a class="button warning" href=${`/edit/${meme._id}`}>Edit</a>
            <button @click=${deleteHandler} id="deleteBtn" class="button danger">Delete</button>`
            : null
        }
        
      </div>
    </div>
  </section>
`;

export async function detailsPage(context, next) {
    const meme = await getOneById(context.params.id);
    const userData = getUserData();
    const isOwner = userData && userData.id == meme._ownerId;

    context.render(detailsTemplate(meme, isOwner, deleteHandler))


    async function deleteHandler(){
      const confirmed = confirm('Are you sure want to delete ' + meme.title);
      if(confirmed){
        await deleteMemeById(meme._id);
        context.page.redirect('/all-memes');
      }
    }

}

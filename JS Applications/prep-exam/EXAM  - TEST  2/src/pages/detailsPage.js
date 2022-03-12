import { html } from '../lib.js';
import { deleteItemById, getAllComments, getOneById, postComment } from '../api/data.js';
import { getUserData } from '../utils.js';

const commentTemp = (comment) => html`
  <li class="comment">
    <p>Content: ${comment.comment}</p>
  </li>
`;

const commentsTemplate = (comments, isNotOwner, onSubmitComment) => html`
  <!-- Bonus ( for Guests and Users ) -->
  <div class="details-comments">
    <h2>Comments:</h2>
    ${comments.length > 0
      ? html`
        <ul>
          ${comments.map(commentTemp)}
        </ul>`
      : html`<p class="no-comment">No comments.</p>`
    }
  </div>

  ${isNotOwner
    ? html`
      <article class="create-comment">
        <label>Add new comment:</label>
        <form @submit=${onSubmitComment} class="form">
          <textarea name="comment" placeholder="Comment......"></textarea>
          <input class="btn submit" type="submit" value="Add Comment" />
        </form>
      </article>`
    : null}
  
`;

const controlsTemplate = (id, onDelete) => html`
  <!-- Edit/Delete buttons ( Only for creator of this game )  -->
  <div class="buttons">
    <a href=${`/edit/${id}`} class="button">Edit</a>
    <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
  </div>
`;

const detailsTemplate = (game, isOwner, onDelete, comments, isNotOwner, onSubmitComment) => html`
  <!--Details Page-->
  <section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
      <div class="game-header">
        <img class="game-img" src=${game.imageUrl} />
        <h1>${game.title}</h1>
        <span class="levels">MaxLevel: ${game.maxLevel}</span>
        <p class="type">${game.category}</p>
      </div>
      <p class="text">${game.summary}</p>

      ${commentsTemplate(comments, isNotOwner, onSubmitComment)}
      ${isOwner ? controlsTemplate(game._id, onDelete) : null}
    </div>
  </section>
`;

export async function detailsPage(context) {
  const game = await getOneById(context.params.id);

  const userData = getUserData();
  const isOwner = userData && game._ownerId == userData.id;
  const isNotOwner = userData && game._ownerId != userData.id;
  const comments = await getAllComments(game._id);
  context.render(detailsTemplate(game, isOwner, onDelete, comments, isNotOwner, onSubmitComment));

  async function onDelete(e) {
    e.preventDefault();
    const confirmed = confirm('Are you sure want to delete ' + game.title);
    if (confirmed) {
      await deleteItemById(context.params.id);
      context.page.redirect('/');
    }
  }

  async function onSubmitComment(e){
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const comment = formData.get('comment');
    console.log(comment)
    if(comment.trim() == ''){
      return alert('Comment cannot be empty!');
    }
    await postComment(game._id, comment);
    e.target.reset();
    context.page.redirect(`/details/${game._id}`);
  }
}

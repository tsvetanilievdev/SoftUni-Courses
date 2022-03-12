import { deleteItemById, getAllLikes, getLikeFromUser, getOneById, likeItem } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const bookInfoTemplate = (book) => html`
      <h3>${book.title}</h3>
      <div class="type"><p>Type: ${book.type}</p></div>
      <p class="img"><img src=${book.imageUrl} /></p>
`

const detailsTemplate = (book, isOwner, loggedNotOwner, onDelete, alreadyLiked, likeHandler, likesCount) => html`
  <!-- Details Page ( for Guests and Users ) -->
  <section id="details-page" class="details">
    <div class="book-information">
      ${bookInfoTemplate(book)}
      <div class="actions">
          <!-- Edit/Delete buttons ( Only for creator of this book )  -->
          ${isOwner
            ? html`<a class="button" href=${`/edit/${book._id}`}>Edit</a>
                   <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
            : null
        }
        

        <!-- Bonus -->
        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
        ${loggedNotOwner && !alreadyLiked
            ? html`<a @click=${likeHandler} class="button" href="javascript:void(0)">Like</a>`
            : null
        }
        

        <!-- ( for Guests and Users )  -->
        <div class="likes">
          <img class="hearts" src="/images/heart.png" />
          <span id="total-likes">Likes: ${likesCount}</span>
        </div>
        <!-- Bonus -->
      </div>
    </div>
    <div class="book-description">
      <h3>Description:</h3>
      <p>${book.description}</p>
    </div>
  </section>
`;
export async function detailsPage(context) {
  const book = await getOneById(context.params.id);

  const userData = getUserData();
  const isOwner = userData && book._ownerId == userData.id;
  const loggedNotOwner = userData && book._ownerId != userData.id;
  const alreadyLiked = Boolean(await getLikeFromUser(book._id, userData?.id));
  const likesCount = await getAllLikes(book._id);
  context.render(detailsTemplate(book, isOwner, loggedNotOwner, onDelete, alreadyLiked, likeHandler,likesCount));



  async function onDelete(e){
      e.preventDefault();
      const confirmed = confirm('Are you sure want to delete ' + book.title);
      if(confirmed){
          await deleteItemById(context.params.id);
          context.page.redirect('/');
      }
  }

  async function likeHandler(e){
    e.preventDefault();
    await likeItem(book._id);
    document.querySelector('#total-likes').textContent = `Likes: ${likesCount + 1}`
    e.target.remove();
  }
}

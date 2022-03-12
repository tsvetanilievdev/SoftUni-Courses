import { deleteItemById, getOneById } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const detailsTemplate = (book, isOwner, loggedNotOwner, onDelete) => html`
  <!-- Details Page ( for Guests and Users ) -->
  <section id="details-page" class="details">
    <div class="book-information">
      <h3>${book.title}</h3>
      <p class="type">Type: ${book.type}</p>
      <p class="img"><img src=${book.imageUrl} /></p>
      <div class="actions">
          <!-- Edit/Delete buttons ( Only for creator of this book )  -->
          ${isOwner
            ? html`<a class="button" href=${`/edit/${book._id}`}>Edit</a>
                   <a @click=${onDelete} class="button" href="javascript:void(0)">Delete</a>`
            : null
        }
        

        <!-- Bonus -->
        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
        ${loggedNotOwner
            ? html`<a class="button" href="#">Like</a>`
            : null
        }
        

        <!-- ( for Guests and Users )  -->
        <div class="likes">
          <img class="hearts" src="/images/heart.png" />
          <span id="total-likes">Likes: TO DO LIKES...</span>
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
  context.render(detailsTemplate(book, isOwner, loggedNotOwner, onDelete));

  async function onDelete(e){
      e.preventDefault();
      const confirmed = confirm('Are you sure want to delete ' + book.title);
      if(confirmed){
          await deleteItemById(context.params.id);
          context.page.redirect('/');
      }
  }
}

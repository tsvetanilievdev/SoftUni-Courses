import { deleteItemById, getAllLikes, getLikeFromUser, getOneById, likeItem } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../utils.js';

const controlsButtons = (isOwner,isNotOwner, onDelete, event, alreadyLiked, likeHandler) => html`
  <div class="buttons">
      ${isOwner 
        ? html`
            <a class="btn-delete" @click=${onDelete} href="javascript:void(0)">Delete</a>
            <a class="btn-edit" href=${`/edit/${event._id}`}>Edit</a>`
        : null}
      ${isNotOwner && !alreadyLiked
        ? html`<a class="btn-like" @click=${likeHandler} href="javascript:void(0)">Like</a>`
        : null
        }
  </div>
`;

const detailsTemplate = (event, isOwner,isNotOwner, onDelete, likesCount,alreadyLiked, likeHandler) => html` <section id="detailsPage">
  <div id="detailsBox">
    <div class="detailsInfo">
      <h1>Title: ${event.title}</h1>
      <div>
        <img src=${event.imageUrl} />
      </div>
    </div>

    <div class="details">
      <h3>Theater Description</h3>
      <p>${event.description}</p>
      <h4>Date: ${event.date}</h4>
      <h4>Author: ${event.author}</h4>
        ${controlsButtons(isOwner,isNotOwner, onDelete, event, alreadyLiked, likeHandler)}
      <p  class="likes">Likes: <span id="total-likes">${likesCount}</span></p>
    </div>
  </div>
</section>`;

export async function detailsPage(context) {
  const event = await getOneById(context.params.id);

  
  const userData = getUserData();
  const isOwner = userData && event._ownerId == userData.id;
  const isNotOwner = userData && event._ownerId != userData.id;
  const alreadyLiked = Boolean(await getLikeFromUser(event._id, userData?.id));
  const likesCount = await getAllLikes(event._id);

  context.render(detailsTemplate(event, isOwner,isNotOwner, onDelete, likesCount, alreadyLiked,likeHandler ));

  async function onDelete(e) {
    e.preventDefault();
    const confirmed = confirm('Are you sure want to delete ' + event.title);
    if (confirmed) {
      await deleteItemById(context.params.id);
      context.page.redirect('/');
    }
  }

  async function likeHandler(e){
    e.preventDefault();
    await likeItem(event._id);
    document.querySelector('#total-likes').textContent = `${likesCount + 1}`;
    console.log(e.target);
    e.target.classList.add('hidden')
  }
}

import { getAllMyMemes } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData, isLogged } from '../utils.js';
import { notify } from '../common/notify.js';
const memeCard = (meme) => html`
  <div class="user-meme">
    <p class="user-meme-title">${meme.title}</p>
    <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl} />
    <a class="button" href=${`/details/${meme._id}`}>Details</a>
  </div>
`;

const myProfileTemplate = (isLogged, memes, userData) => html`
  <!-- Profile Page ( Only for logged users ) -->
  ${
    isLogged
      ? html` <section id="user-profile-page" class="user-profile">
          <article class="user-info">
            <img
              id="user-avatar-url"
              alt="user-profile"
              src="/images/female.png"
            />
            <div class="user-content">
              <p>Username: ${userData.username}</p>
              <p>Email: ${userData.email}</p>
              <p>My memes count: ${memes.length}</p>
            </div>
          </article>
        </section>`
      : null
  }
  
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
      <!-- Display : All created memes by this user (If any) -->
      ${
        memes.length > 0
          ? memes.map(memeCard)
          : html`<p class="no-memes">No memes in database.</p>`
      }
    </div>
  </section>
`;
export async function myProfilePage(context, next) {
  const isLog = isLogged();
  const userData = getUserData();
  const myMemes = await getAllMyMemes(userData.id);
  context.render(myProfileTemplate(isLog, myMemes, userData));
}

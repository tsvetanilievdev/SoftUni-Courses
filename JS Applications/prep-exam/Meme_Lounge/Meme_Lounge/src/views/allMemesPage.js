import { getAll } from '../api/data.js';
import { html } from '../lib.js';

const memeCard = (meme) => html`
  <div class="meme">
    <div class="card">
      <div class="info">
        <p class="meme-title">${meme.title}</p>
        <img class="meme-image" alt="meme-img" src=${meme.imageUrl} />
      </div>
      <div id="data-buttons">
        <a class="button" href=${`/details/${meme._id}`}>Details</a>
      </div>
    </div>
  </div>
`;

const allMemesTemplate = (memes) => html`
  <section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        <!-- Display : All memes in database ( If any ) -->
      <!-- Display : If there are no memes in database -->
        ${memes.length > 0 
            ? memes.map(memeCard) 
            : html`<p class="no-memes">No memes in database.</p>`}
      

    </div>
  </section>
`;

export async function allMemesPage(context, next) {
    const memes = await getAll();
    context.render(allMemesTemplate(memes))
}

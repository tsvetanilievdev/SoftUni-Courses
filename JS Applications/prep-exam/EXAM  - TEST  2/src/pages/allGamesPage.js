import { getAll } from '../api/data.js';
import { html } from '../lib.js';

const gameTemplate = (game) => html`
<div class="allGames">
      <div class="allGames-info">
        <img src=${game.imageUrl} />
        <h6>${game.category}</h6>
        <h2>${game.title}</h2>
        <a href=${`/details/${game._id}`} class="details-button">Details</a>
      </div>
    </div>
`

const allGamesTemplate = (allGames) => html` 
<!-- Catalogue -->
  <section id="catalog-page">
    <h1>All Games</h1>
    <!-- Display div: with information about every game (if any) -->
    ${allGames.length > 0 
        ? allGames.map(gameTemplate)
        : html`<h3 class="no-articles">No articles yet</h3>`
    }
    
  </section>`;

export async function allGamesPage(context) {
    const allGames = await getAll();
    context.render(allGamesTemplate(allGames))

}

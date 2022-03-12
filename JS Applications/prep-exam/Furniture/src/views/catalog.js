import { getAll, getAllMyItemsByUserId } from '../api/data.js';
import { html } from '../lib.js';
import { getUserData } from '../util.js';

const furnitureCard = (item) => html`
  <div class="row space-top">
    <div class="col-md-4">
      <div class="card text-white bg-primary">
        <div class="card-body">
          <img src=${item.img} />
          <p>${item.description}</p>
          <footer>
            <p>Price: <span>${item.price}</span></p>
          </footer>
          <div>
            <a href=${`details/${item._id}`} class="btn btn-info">Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const catalogTemplate = (furnitures, userPage) => html`
  <div class="row space-top">
    <div class="col-md-12">
      ${userPage 
        ? html`
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>`
        : html`
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>`
      }
      
    </div>
  </div>
  ${furnitures.map((x) => furnitureCard(x))}
  </div>
`;

export async function catalogPage(context) {
  const userPage = context.pathname == '/my-furniture';
  let furnitures = [];

  if (userPage) {
    const userId = getUserData().id;
    furnitures = await getAllMyItemsByUserId(userId);
  } else {
    furnitures = await getAll();
  }

  const contentResult = catalogTemplate(furnitures, userPage);
  context.render(contentResult);
  console.log('catalog');
}

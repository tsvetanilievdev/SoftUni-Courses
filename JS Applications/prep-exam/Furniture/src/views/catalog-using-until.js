import { getAll } from '../api/data.js';
import { html, until } from '../lib.js';

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
            <a href=${`/details/${item._id}`} class="btn btn-info">Details</a>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

const catalogTemplate = (dataPromise) => html`
  <div class="row space-top">
    <div class="col-md-12">
      <h1>Welcome to Furniture System</h1>
      <p>Select furniture from the catalog to view details.</p>
    </div>
  </div>
  ${until(dataPromise, html`<p>Loading... &hellip; </p>`)}
</div>
`;

export async function catalogPage(context) {

  console.log(context.render(catalogTemplate(loadFurnitures())));
  console.log('catalog');
}

async function loadFurnitures(){
  const furnitures = await getAll();
  return furnitures.map(furnitureCard)
}
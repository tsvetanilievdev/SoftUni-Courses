import { html } from './../../node_modules/lit-html/lit-html.js';
import { getAllFurnitures } from '../api/data.js';

const singleFurnitureTemplate = (furniture) => html` <div class="col-md-4">
  <div class="card text-white bg-primary">
    <div class="card-body">
      <img src="${furniture.img}" />
      <p>${furniture.description}</p>
      <footer>
        <p>Price: <span>${furniture.price} $</span></p>
      </footer>
      <div>
        <a href=${`/details/${furniture._id}`} class="btn btn-info">Details</a>
      </div>
    </div>
  </div>
</div>`;

const dashboardTemplate = (data, search, onSearch) => html` <div
    class="row space-top"
  >
    <div class="col-md-12">
      <h1>Welcome to Furniture System</h1>
      <p>Select furniture from the catalog to view details.</p>
      <div style="float: right">
        <input id="searchInput" name="search" type="text" .value=${search} />
        <button @click=${onSearch}>Search</button>
      </div>
    </div>
  </div>
  <div class="row space-top">
    ${data.map((x) => singleFurnitureTemplate(x))}
  </div>`;

export async function dashboardPage(ctx) {
  let searchParam = ctx.querystring.split('=')[1];
  if(searchParam == undefined){
      searchParam = '';
  }

  const data = await getAllFurnitures(searchParam);
  data
    .filter((x) => x.img.startsWith('.'))
    .forEach((x) => (x.img = x.img.slice(1)));

  ctx.render(dashboardTemplate(data, searchParam, onSearch));
  ctx.setUserNav();

  function onSearch(event) {
    const search = encodeURIComponent(
      document.getElementById('searchInput').value
    );
    ctx.page.redirect(`/?search=${search}`);
  }
}

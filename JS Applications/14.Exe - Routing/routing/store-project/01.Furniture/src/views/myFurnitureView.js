import { html } from "../../node_modules/lit-html/lit-html.js";
import { getMyFurniture } from "../api/data.js";

const singleFurnitureTemplate = (furniture) => html `
<div class="col-md-4">
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
</div>`

const myDashboardTemplate = (data) => html `
<div class="row space-top">
    <div class="col-md-12">
                <h1>My Furniture</h1>
                <p>This is a list of your publications.</p>
    </div>
</div>
<div class="row space-top">
    ${data.map(x => singleFurnitureTemplate(x))}
</div>`

export async function myFurniturePage(ctx) {

    const data = await getMyFurniture();

    ctx.render(myDashboardTemplate(data))
}
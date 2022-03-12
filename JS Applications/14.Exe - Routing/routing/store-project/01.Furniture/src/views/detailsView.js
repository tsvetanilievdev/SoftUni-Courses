import { deleteFurnitureById, getFurnitureById } from '../api/data.js';
import { html } from './../../node_modules/lit-html/lit-html.js'

const detailsTemplate = (furniture, isOwner, onDelete) => html`
<div class="row space-top">
            <div class="col-md-12">
                <h1>Furniture Details</h1>
            </div>
        </div>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                        <img src=${furniture.img} />
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <p>Make: <span>${furniture.make}</span></p>
                <p>Model: <span>${furniture.model}</span></p>
                <p>Year: <span>${furniture.year}</span></p>
                <p>Description: <span>${furniture.description}</span></p>
                <p>Price: <span>${furniture.price}</span></p>
                <p>Material: <span>${furniture.material}</span></p>
                ${isOwner ? html`<div>
                    <a href=${`/edit/${furniture._id}`} class="btn btn-info">Edit</a>
                    <a @click=${onDelete} href="javascript:void(0)" class="btn btn-red">Delete</a>
                </div>` : ''}
            </div>
        </div>`

export async function detailsPage(ctx) {
    const id = ctx.params.id
    const result = await getFurnitureById(id);

    //махаме точката пред пътя на снимката, ако има такава!
    if(result.img.startsWith('.')){
        result.img = result.img.slice(1)
    }
    const userId = sessionStorage.getItem('userId');
    const isOwner = userId == result._ownerId;
    ctx.render(detailsTemplate(result, isOwner, onDelete))
    

    async function onDelete(){
        // debugger
        const confirmed = confirm('Are you sure?')
        if(confirmed){
            await deleteFurnitureById(result._id);
            ctx.page.redirect('/');
        }
        console.log('hui');
    }
}
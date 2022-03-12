import { html } from "../../node_modules/lit-html/lit-html.js";
import { getFurnitureById, updateFurnitureById } from "../api/data.js";


const editTemplate = (furniture, onSubmit, isInvalid) => html`<div class="row space-top">
<div class="col-md-12">
    <h1>Edit Furniture</h1>
    <p>Please fill all fields.</p>
</div>
</div>
<form @submit=${onSubmit}>
<div class="row space-top">
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="new-make">Make</label>
            <input class="form-control${isInvalid.make ? ' is-invalid' : ' is-valid'}" id="new-make" type="text" name="make" .value="${furniture.make}">
        </div>
        <div class="form-group has-success">
            <label class="form-control-label" for="new-model">Model</label>
            <input class="form-control${isInvalid.model ? ' is-invalid' : ' is-valid'}" id="new-model" type="text" name="model" .value="${furniture.model}">
        </div>
        <div class="form-group has-danger">
            <label class="form-control-label" for="new-year">Year</label>
            <input class="form-control${isInvalid.year ? ' is-invalid' : ' is-valid'}" id="new-year" type="number" name="year" .value="${furniture.year}">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-description">Description</label>
            <input class="form-control${isInvalid.description ? ' is-invalid' : ' is-valid'}" id="new-description" type="text" name="description" .value="${furniture.description}">
        </div>
    </div>
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="new-price">Price</label>
            <input class="form-control${isInvalid.price ? ' is-invalid' : ' is-valid'}" id="new-price" type="number" name="price" .value="${furniture.price}">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-image">Image</label>
            <input class="form-control${isInvalid.img ? ' is-invalid' : ' is-valid'}" id="new-image" type="text" name="img" .value="${furniture.img}">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-material">Material (optional)</label>
            <input class="form-control" id="new-material" type="text" name="material" .value="${furniture.material}">
        </div>
        <input type="submit" class="btn btn-info" value="Edit" />
    </div>
</div>
</form>`

export async function editPage(ctx) {
    
    let isInvalid = {
        make: true,
        model: true,
        year: true,
        price: true,
        description: true,
        img: true
    }


    const result = await getFurnitureById(ctx.params.id);
    ctx.render(editTemplate(result,onSubmit, isInvalid));

    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        const arr = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a,{[k]: v}), {});
        
        if(Object.entries(arr).filter(([k,v]) => k != 'material').some(([k,v]) => v == '')){
            return alert('Please fill all mandatory fields!');
        }

        const data = {
            make: formData.get('make').trim(),
            model: formData.get('model').trim(),
            year: formData.get('year').trim(),
            description: formData.get('description').trim(),
            price: formData.get('price').trim(),
            img: formData.get('img').trim(),
            material: formData.get('material').trim(),
        }

        isInvalid = {};

        if(data.make.length < 4){
            isInvalid.make = true;
        }
        if(data.model.length < 4){
            isInvalid.model = true;
        }
        if(Number(data.year) < 1950 ?? Number(data.year) > 2050){
            isInvalid.year = true;
        }
        if(data.description.length <= 10){
            isInvalid.description = true;
        }
        if(Number(data.price) < 1){
            isInvalid.price = true;
        }
        if(data.img == ''){
            isInvalid.img = true;
        }
        
        if(Object.keys(isInvalid).length > 0){
            console.log(isInvalid)
            return ctx.render(editTemplate(result,onSubmit, isInvalid));
        }
        await updateFurnitureById(ctx.params.id, data)
        ctx.page.redirect('/details/' + ctx.params.id)
    }
}
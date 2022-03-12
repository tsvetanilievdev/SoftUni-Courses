import { html } from "../../node_modules/lit-html/lit-html.js";
import {ifDefined} from '../../node_modules/lit-html/directives/if-defined.js'
import { createFurniture } from "../api/data.js";

const createTemplate = (onSubmit, isValid) => html` <div class="row space-top">
<div class="col-md-12">
    <h1>Create New Furniture</h1>
    <p>Please fill all fields.</p>
</div>
</div>
<form @submit=${onSubmit}>
<div class="row space-top">
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="new-make">Make</label>
            <input class="form-control" id="new-make" type="text" name="make">
        </div>
        <div class="form-group has-success">
            <label class="form-control-label" for="new-model">Model</label>
            <input class="form-control" id="new-model" type="text" name="model">
        </div>
        <div class="form-group has-danger">
            <label class="form-control-label" for="new-year">Year</label>
            <input class="form-control" id="new-year" type="number" name="year">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-description">Description</label>
            <input class="form-control" id="new-description" type="text" name="description">
        </div>
    </div>
    <div class="col-md-4">
        <div class="form-group">
            <label class="form-control-label" for="new-price">Price</label>
            <input class="form-control" id="new-price" type="number" name="price">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-image">Image</label>
            <input class="form-control" id="new-image" type="text" name="img">
        </div>
        <div class="form-group">
            <label class="form-control-label" for="new-material">Material (optional)</label>
            <input class="form-control" id="new-material" type="text" name="material">
        </div>
        <input type="submit" class="btn btn-primary" value="Create" />
    </div>
</div>
</form>`

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit, {}))

    async function onSubmit(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const make = formData.get('make').trim();
        const model = formData.get('model').trim();
        const year = formData.get('year').trim();
        const description = formData.get('description').trim();
        const price = formData.get('price').trim();
        const img = formData.get('img').trim();
        const material = formData.get('material').trim();

        const arr = [...formData.entries()].reduce((a, [k, v]) => Object.assign(a,{[k]: v}), {});
        
        if(Object.entries(arr).filter(([k,v]) => k != 'material').some(([k,v]) => v == '')){
            return alert('Please fill all mandatory fields!');
        }

    //    const isValid = {}

    //     if(make.length < 4){
    //         isValid.make = 'is-invalid';
    //     }else {
    //         isValid.make = 'is-valid';
    //     }
    //     if(model.length < 4){
    //         isValid.model = 'is-invalid';
    //     }else {
    //         isValid.model = 'is-valid';
    //     }
    //     if(Number(year) < 1950 && Number(year) > 2050){
    //         isValid.year = 'is-invalid';
    //     }else {
    //         isValid.year = 'is-valid';
    //     }
    //     if(description.length < 10){
    //         isValid.description = 'is-invalid';
    //     }else {
    //         isValid.description = 'is-valid';
    //     }
    //     if(Number(price) < 0){
    //         isValid.price = 'is-invalid';
    //     }else {
    //         isValid.price = 'is-valid';
    //     }
    //     if(img == ''){
    //         isValid.img = 'is-invalid';
    //     }else {
    //         isValid.img = 'is-valid';
    //     }



        const data = {
            make,
            model,
            year,
            description,
            price,
            img,
            material
        }
        const result = await createFurniture(data);
        ctx.page.redirect('/details/' + result._id);
    }
}
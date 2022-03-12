import { getOneById, updateitemById } from '../api/data.js';
import { html, ifDefined } from '../lib.js';

const editTemplate = (item, onSubmit, errMsg, errors) => html` <div class="row space-top">
    <div class="col-md-12">
      <h1>Edit Furniture</h1>
      <p>Please fill all fields.</p>
    </div>
  </div>
  ${errMsg ? html`<div class="col-md-4 error">${errMsg}</div>` : null}
  <form @submit=${onSubmit}>
    <div class="row space-top">
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-make">Make</label>
          <input
            class=${'form-control' + (errors.make ? ' is-invalid' : ' is-valid')}
            id="new-make"
            type="text"
            name="make"
            .value=${item.make}
          />
        </div>
        <div class="form-group has-success">
          <label class="form-control-label" for="new-model">Model</label>
          <input
            class=${'form-control' + (errors.model ? ' is-invalid' : ' is-valid')}
            id="new-model"
            type="text"
            name="model"
            .value=${item.model}
          />
        </div>
        <div class="form-group has-danger">
          <label class="form-control-label" for="new-year">Year</label>
          <input
            class=${'form-control' + (errors.year ? ' is-invalid' : ' is-valid')}
            id="new-year"
            type="number"
            name="year"
            .value=${item.year}
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-description"
            >Description</label
          >
          <input
            class=${'form-control' + (errors.description ? ' is-invalid' : ' is-valid')}
            id="new-description"
            type="text"
            name="description"
            .value=${item.description}
          />
        </div>
      </div>
      <div class="col-md-4">
        <div class="form-group">
          <label class="form-control-label" for="new-price">Price</label>
          <input
            class=${'form-control' + (errors.price ? ' is-invalid' : ' is-valid')}
            id="new-price"
            type="number"
            name="price"
            .value=${item.price}
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-image">Image</label>
          <input
            class=${'form-control' + (errors.img ? ' is-invalid' : ' is-valid')}
            id="new-image"
            type="text"
            name="img"
            .value=${item.img}
          />
        </div>
        <div class="form-group">
          <label class="form-control-label" for="new-material"
            >Material (optional)</label
          >
          <input
            class="form-control"
            id="new-material"
            type="text"
            name="material"
            .value=${item.material}
          />
        </div>
        <input type="submit" class="btn btn-info" value="Edit" />
      </div>
    </div>
  </form>`;
export async function editPage(context) {
  const item = await getOneById(context.params.id);
  context.render(editTemplate(item, onSubmit, null, {}));
  console.log('edit', context.params.id);

  async function onSubmit(e) {
    e.preventDefault();
    
      //formData я преобразуваме в масив от tuples
      const formData = [...new FormData(e.currentTarget).entries()];

      // взимаме всички полета и ги обединяваме в един обект;
      const data = formData.reduce((a, [k, v]) => Object.assign(a, { [k]: v }),{});

      // взимаме всички полета, които са празни и ги преобразуваме в обект в който, всяко празно поле е със стойност true;
      const missing = formData.filter(([k, v]) => k != 'material' && v == '');
      const errors = missing.reduce((a,[k,v]) => Object.assign(a, {[k]: true}), {})

      try {
      if (missing.length > 0) {
        throw {
            error:new Error('Please fill all mandatory fields!'),
            errors,
        }
      }

      data.year = Number(data.year);
      data.price = Number(data.price);

      await updateitemById(context.params.id, data);
      context.page.redirect('/details/' + context.params.id);
    } catch (err) {
        const message = err.message || err.error.message;
        context.render(editTemplate(item, onSubmit, message, err.errors || {}));

    }
  }
}

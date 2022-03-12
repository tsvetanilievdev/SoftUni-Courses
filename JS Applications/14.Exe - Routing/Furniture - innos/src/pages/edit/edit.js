import { deleteItemById, getItemById, updateItemById } from '../../services/auth.js';
import { editTemplate } from './editTemplate.js';

let form = {};
async function onSubmit(context, e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const make = formData.get('make');
  const model = formData.get('model');
  const year = formData.get('year');
  const description = formData.get('description');
  const price = formData.get('price');
  const img = formData.get('img');
  const material = formData.get('material');

  form.isValid = {
    make: true,
    model: true,
    year: true,
    description: true,
    price: true,
    img: true,
    material: true,
  };

  if (make.length < 4) {
    form.isValid.make = false;
  }
  if (model.length < 4) {
    form.isValid.model = false;
  }
  if (Number(year) < 1950 || Number(year) > 2050) {
    form.isValid.year = false;
  }
  if (description.length < 10) {
    form.isValid.description = false;
  }
  if (Number(price) < 1) {
    form.isValid.price = false;
  }
  if (img.length < 1) {
    form.isValid.img = false;
  }

  const item = {
    make,
    model,
    year,
    description,
    price,
    img,
    material,
  };

  if (Object.values(form.isValid).some((x) => x == false)) {
    return context.renderMain(editTemplate(item, form));
  }
  const result = await updateItemById(context.params.id,item);
  context.page.redirect('/details/' + result._id);
}

export async function editPage(context) {
  form.submitHandler = onSubmit.bind(null, context);
  form.isValid = {
    make: true,
    model: true,
    year: true,
    description: true,
    price: true,
    img: true,
    material: true,
  };
  const item = await getItemById(context.params.id);
  const result = editTemplate(item, form);
  context.renderMain(result);
}

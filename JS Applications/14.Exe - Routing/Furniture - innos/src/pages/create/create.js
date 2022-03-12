import { createItem } from '../../services/auth.js';
import { createTemplate } from './createTemplate.js';

let form = undefined;

export async function createPage(context) {
  const boundedCreateHandler = onSubmit.bind(null, context);

  form = {
    submitHandler: boundedCreateHandler,
    isValid: {
      make: true,
      model: true,
      year: true,
      description: true,
      price: true,
      img: true,
      material: true,
    },
  };
  const result = createTemplate(form);
  context.renderMain(result);
}

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
  }

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

  if (Object.values(form.isValid).some((x) => x == false)) {
    return context.renderMain(createTemplate(form));
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
  const result = await createItem(item);
  context.page.redirect('/details/' + result._id);
}

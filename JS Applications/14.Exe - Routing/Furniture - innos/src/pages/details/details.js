import { deleteItemById, getItemById } from '../../services/auth.js';
import { detailsTemplate } from './detailsTemplate.js';

export async function detailsPage(context) {
  const item = await getItemById(context.params.id);

  if (item.img.startsWith('.')) {
    item.img = item.img.slice(1);
  }
  const isOwner = sessionStorage.getItem('userId') == item._ownerId;

  const boundedDeleteHandler = deleteHandler.bind(null, context, item);
  const result = detailsTemplate(item, isOwner, boundedDeleteHandler);
  context.renderMain(result);
}

async function deleteHandler(context, item) {
  const confirmed = confirm(
    'Are you sure you want to delete ' + item.make);
  if (confirmed) {
    await deleteItemById(context.params.id);
    context.page.redirect('/dashboard');
  }
}
